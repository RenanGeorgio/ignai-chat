import React, { FunctionComponent, useState, useRef } from "react";
import { Switch, Stack, FormGroup, FormControlLabel, Button, ButtonGroup, Popper, Grow, Paper, ClickAwayListener } from "@mui/material";
import { QueueItems } from "./items";
import { MessageCircleIcon, SettingIcon } from "../../assets/icons";
import { QueueItemLabel } from "../../types";

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
  const anchorRef = useRef<HTMLDivElement>(null);

  const [checked, setChecked] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const [manual, setManual] = useState<boolean>(true);
  const [controllDisabled, setControllDisabled] = useState<boolean>(false);

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

  const handleClose = (event: Event) => {
    if ((anchorRef.current) && (anchorRef.current.contains(event.target as HTMLElement))) {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={styles.queueItems}>
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
              onClick={() => {
                alert('clicked');
              }}
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
        <h3 className={styles.filaDeAtendimento}>Fila de atendimento</h3>
      </div>
      <div className={styles.queueContacts}>
        <QueueItems queueItemsLabel={queueItems} />
      </div>
    </div>
  );
}

export default QueueComponent;