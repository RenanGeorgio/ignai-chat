import React, { FunctionComponent, useState, useRef } from "react";
import { Switch, Stack, FormGroup, FormControlLabel, Button, ButtonGroup, Popper, Grow, Paper, ClickAwayListener } from "@mui/material";
import type { PopperChildrenProps } from "@mui/material/Popper";
import { MessageCircleIcon, SettingIcon } from "../../assets/icons";

import styles from "./queue.module.css";

export type QueueItemsType = {
  children?: React.ReactNode;
};

type GrowProps = {
  TransitionProps: any 
  placement: string
};

const QueueComponent: FunctionComponent<QueueItemsType> = () => {
  const anchorRef = useRef<HTMLDivElement>(null);

  const [checked, setChecked] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const [manual, setManual] = useState<boolean>(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleChangeManualMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setManual(event.target.checked);
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
              disabled={false}
              endIcon={<MessageCircleIcon />}
              onClick={() => {
                alert('clicked');
              }}
            >
              Send
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
            {({ TransitionProps, placement }: PopperChildrenProps) => (
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
        <div className={styles.contactContainer}>
          <div className={styles.contactItem}>          
            <div className={styles.statusContainer}>
              <span className={styles.emoji}>🎧</span>  
              <p className={styles.p}>{`554356`}</p>
              <p className={styles.incio}>{`início: 15:45`}</p>
              <p className={styles.statusOn}>{`status: on`}</p>
              <p className={styles.espera}>Espera: 01:30</p>
            </div>
          </div>
          <div className={styles.contactItem}>          
            <div className={styles.statusContainer}>
              <span className={styles.emoji}>🎧</span>  
              <p className={styles.p}>{`421386`}</p>
              <p className={styles.incio}>{`início: 12:15`}</p>
              <p className={styles.statusOn}>{`status: on`}</p>
              <p className={styles.espera}>Espera: 02:40</p>
            </div>
          </div>
          <div className={styles.contactItem}>          
            <div className={styles.statusContainer}>
              <span className={styles.emoji}>🎧</span>  
              <p className={styles.p}>{`111313`}</p>
              <p className={styles.incio}>{`início: 13:00`}</p>
              <p className={styles.statusOn}>{`status: off`}</p>
              <p className={styles.espera}>Espera: 00:30</p>
            </div>
          </div>
          <div className={styles.contactItem}>          
            <div className={styles.statusContainer}>
              <span className={styles.emoji}>🎧</span>  
              <p className={styles.p}>{`135646`}</p>
              <p className={styles.incio}>{`início: 11:45`}</p>
              <p className={styles.statusOn}>{`status: off`}</p>
              <p className={styles.espera}>Espera: 01:00</p>
            </div>
          </div>
          <div className={styles.contactItem}>          
            <div className={styles.statusContainer}>
              <span className={styles.emoji}>🎧</span>  
              <p className={styles.p}>{`567946`}</p>
              <p className={styles.incio}>{`início: 08:00`}</p>
              <p className={styles.statusOn}>{`status: on`}</p>
              <p className={styles.espera}>Espera: 00:45</p>
            </div>
          </div>
          <div className={styles.contactItem}>          
            <div className={styles.statusContainer}>
              <span className={styles.emoji}>🎧</span>  
              <p className={styles.p}>{`7865135`}</p>
              <p className={styles.incio}>{`início: 13:15`}</p>
              <p className={styles.statusOn}>{`status: on`}</p>
              <p className={styles.espera}>Espera: 12:45</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueueComponent;