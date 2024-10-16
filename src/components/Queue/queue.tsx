import React, { FunctionComponent, useState, useRef, useEffect } from "react";
import {
  Switch,
  Stack,
  FormGroup,
  FormControlLabel,
  Button,
  ButtonGroup,
  Popper,
  Grow,
  Paper,
  ClickAwayListener
} from "@mui/material";

import { selectQueueConversation } from "../../store/conversations/slice";
import { useAppSelector } from "../../store/hooks";
import { useQueue } from "../../contexts/call/hooks";
import { useChat } from "../../contexts/chat/hooks";
import { useTime } from "../../contexts/time/hooks";
import { QueueItems } from "./items";
import { checkChatStatus } from "../../helpers/checkStatus";
import { secondsToTime } from "../../helpers/timeConverter";
import { MessageCircleIcon, SettingIcon } from "../../assets/icons";
import { CONVERSATION_CHANNEL, QueueItemLabel } from "../../types";
import { ConversationDTO } from "../../store/types";

import styles from "./queue.module.css";

export type QueueItemsType = {
  children?: React.ReactNode;
};

const QueueComponent: FunctionComponent<QueueItemsType> = () => {
  const queueConversations: ConversationDTO[] = useAppSelector(selectQueueConversation);

  const { totalTime, startTiming, pauseTiming, clearTiming } = useTime();
  const { handleIndexChange } = useQueue();
  const { handleSocketIndexChange, updateCurrentChat } = useChat();

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
      if (currentItem) {
        if (currentItem?.emoji == CONVERSATION_CHANNEL.CALL) {
          handleIndexChange(currentItem.id); // TO-DO: confirmar atendimento - Bloquear alterações do item
        } else {
          handleSocketIndexChange(currentItem.id); // Ele é a seleçao do chat atual
        }
      }

      setBlockSend(false); // TO-DO: mudar quando o atendimento finalizar
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked; 
    setChecked(isChecked);
    
    if (isChecked) {
      startTiming();
      console.log('startTiming');
    } else {
      console.log('pauseTiming');
      pauseTiming();
    }
  };

  const handleChangeManualMode = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
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
    if (anchorRef.current && anchorRef.current?.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    if (checked) {
      setCurrentItem(selectedItem);
    }
  }, [selectedItem, checked]);

  useEffect(() => {
    if (!manual) {
      if ((currentItem !== undefined) && checkChatStatus(currentItem.status)) {
        // verificar se passa o queue status ou o chat status
        handleStartWork();
      }
    }
  }, [currentItem, manual]);

  useEffect(() => {
    const queueItems: QueueItemLabel[] = queueConversations.map((item) => item.label);
    setLabels(queueItems);
  }, [queueConversations]);

  useEffect(() => {
    startTiming();
    return () => clearTiming();
  }, []);

  return (
    <div className={styles.queueItems}>
      <div className={styles.containerHeader}>
        <div className={styles.formGroupContainer}>
         {/*<FormGroup>*/}
          {/* <FormControlLabel */}
          {/* control={ */}
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          {/*}
              label={checked ? 'Habilitado' : 'Em Pausa'}
              className={styles.slider}
            />*/}
          {/* </FormGroup> */}
        </div>
        <h3 className={styles.filaDeAtendimento}>Fila de atendimento</h3>
        {/* tempo total de atendimento */}
        <div className={styles.timeContainer}>
          <span className={styles.time}>{secondsToTime(totalTime)}</span>
        </div>
      </div>
      <div className={styles.queueHeadings}>
        <Stack direction='row' spacing={2}>
          <ButtonGroup
            variant='contained'
            ref={anchorRef}
            aria-label='Button group with a nested menu'
            sx={{
              '& .MuiButtonGroup-grouped': {
                border: 'none',
              },
              '& .MuiButtonGroup-grouped:not(:first-of-type)': {
                borderLeft: '1px solid white',
              },
            }}
          >
            <Button
              size='medium'
              variant='contained'
              sx={{
                backgroundColor: '#ec3d3d',
                '&:hover': {
                  backgroundColor: '#ee6b6b',
                },
                '& .MuiSvgIcon-root': {
                  color: 'white',
                },
              }}
              endIcon={<MessageCircleIcon />}
              onClick={handleStartWork}
            >
              Atender
            </Button>
            <Button
              size='small'
              aria-controls={open ? 'split-button-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-label='select merge strategy'
              aria-haspopup='menu'
              onClick={handleToggle}
              sx={{
                backgroundColor: '#ec3d3d',
                '&:hover': {
                  backgroundColor: '#ee6b6b',
                },
                '& .MuiSvgIcon-root': {
                  color: 'white',
                },
              }}
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
                        label={manual ? 'manual' : 'auto'}
                      />
                    </FormGroup>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </Stack>
      </div>
      {/* <div className={styles.queueContacts}> */}
        <QueueItems
          queueItemsLabel={labels}
          selectItem={handleItemSelect}
          manual={manual}
        />
      {/* </div> */}
      <footer className={styles.footerFila} />
    </div>
  );
}

export default QueueComponent;