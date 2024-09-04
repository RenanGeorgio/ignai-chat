import React, { FunctionComponent, useState, useRef, useEffect } from "react";
import { Switch, Stack, FormGroup, FormControlLabel, Button, ButtonGroup, Popper, Grow, Paper, ClickAwayListener } from "@mui/material";
import { useCall } from "@contexts/call/hooks";
import { selectQueueConversation } from "@store/conversations/slice";
import { useAppSelector } from "@store/hooks";
import { QueueItems } from "./items";
import { MessageCircleIcon, SettingIcon } from "../../assets/icons";
import { QueueItemLabel } from "../../types";
import { ConversationDTO } from "@store/types";

import styles from "./queue.module.css";

export type QueueItemsType = {
  children?: React.ReactNode;
};

const queueItems: QueueItemLabel[] = [
  {
    emoji: 'lsmksmck',
    id: '554356',
    startTime: 'início: 15:45',
    status: 'on',
    waitTime: 'Espera: 01:30'
  },
  {
    emoji: 'lsmksmck',
    id: '554126',
    startTime: 'início: 16:45',
    status: 'on',
    waitTime: 'Espera: 02:30'
  },
]

const QueueComponent: FunctionComponent<QueueItemsType> = () => {
  const queueConversations: ConversationDTO[] = useAppSelector(selectQueueConversation);

  const { handleIndexChange } = useCall();
  
  const anchorRef = useRef<HTMLDivElement>(null);

  const [checked, setChecked] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const [manual, setManual] = useState<boolean>(true);
  const [controllDisabled, setControllDisabled] = useState<boolean>(false);

  const [blockSend, setBlockSend] = useState<boolean>(true);

  const [labels, setLabels] = useState<QueueItemLabel[]>([]);
  const [selectedItem, setSelectedItem] = useState<QueueItemLabel | undefined>(undefined);
  const [currentItem, setCurrentItem] = useState<QueueItemLabel | undefined>(undefined);

  const handleStartWork = () => {
    if (blockSend) {
      // TO-DO: olhar para o emoji -> identificar meio de comunicação do consumidor
      handleIndexChange(currentItem?.id); // TO-DO: confirmar atendimento - Bloquear alterações do item
      setBlockSend(false); // TO-DO: mudar quando o atendimento finalizar
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleChangeManualMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setManual(event.target.checked);
    setControllDisabled(event.target.checked);
  };

  const handleToggle = () => {
    setOpen((prevOpen: boolean) => !prevOpen);
  };

  const handleItemSelect = (item: QueueItemLabel) => {
    if (checked) {
      setSelectedItem(item);
    }
  };

  const handleClose = (event: Event) => {
    if ((anchorRef.current) && (anchorRef.current.contains(event.target as HTMLElement))) {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (checked) {
      setCurrentItem(selectedItem);
    }
  },[selectedItem]);

  useEffect(() => {
    if (!manual) {
      if (currentItem !== undefined) {
        handleStartWork();
      }
    }
  },[currentItem]);

  useEffect(() => {
    const queueItems: QueueItemLabel[] = queueConversations.map((item) => item.label);

    setLabels(queueItems);
  },[queueConversations]);

  return (
    <div className={styles.queueItems}>
      <h3 className={styles.filaDeAtendimento}>Fila de atendimento</h3>
      <div className={styles.queueHeadings}>
        <Stack direction="row" spacing={2}>
          <ButtonGroup
            variant="contained"
            ref={anchorRef}
            aria-label="Button group with a nested menu"
          >
            <Button 
              size="medium" 
              variant="contained" 
              disabled={controllDisabled}
              endIcon={<MessageCircleIcon />}
              onClick={handleStartWork}
            >
              Atender
            </Button>
            <Button
              size="small"
              aria-controls={open ? 'split-button-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={handleToggle}
            >
              <SettingIcon />
            </Button>
          </ButtonGroup>
          <Popper
            sx={{ zIndex: 1 }}
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {/* @ts-ignore */}
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === 'bottom' ? 'center top' : 'center bottom',
                }}
              >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <FormGroup>
                    <FormControlLabel 
                      control={
                        <Switch
                          checked={manual}
                          onChange={handleChangeManualMode}
                          inputProps={{ 'aria-label': 'controlled' }}
                          defaultChecked 
                          size="small"
                        />
                      } 
                      label={manual ? "manual" : "auto"}
                    />
                  </FormGroup>
                </ClickAwayListener>
              </Paper>
            </Grow>
            )}
          </Popper>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                />} 
              label={checked ? "Habilitado" : "Em Pausa"}
            />
          </FormGroup>
        </Stack>
      </div>
      <div className={styles.queueContacts}>
        <QueueItems queueItemsLabel={labels} selectItem={handleItemSelect} manual={manual} />
      </div>
    </div>
  );
}

export default QueueComponent;