import React, { useState, useRef, useEffect } from "react";
import { Device, Call } from "@twilio/voice-sdk";
import { Button } from "@mui/material";

import { useCall } from "../../contexts/call/hooks";
import { useUser } from "../../contexts/user/hooks";
import { Dialler } from "./Dialler";
import { Incoming } from "./Incoming";
import { OnCall } from "./OnCall";
import { CurrentState } from "./CurrentState";
import { isAValidPhoneNumber } from "../../helpers/valid-number";
import { USER_STATE } from "../../types";

import "./Phone.module.css";

export const Phone: React.FC = () => {
  const { options, userState, setUserState } = useCall();
  const { twilioToken } = useUser();

  const currentDevice = useRef<Device | undefined>(undefined);

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [conn, setConn] = useState<Call | undefined | null>(undefined);
  const [callButtonDisabled, setCallButtonDisabled] = useState<boolean>(true);

  const init = async () => {
    if (twilioToken) {
      try {
        console.log('init call');
        currentDevice.current = new Device(twilioToken as string, options as any);

        currentDevice.current?.register();

        currentDevice.current?.addListener('connect', (device: Device) => {
          console.log("Connect event listener added .....");
          return device;
        });

        currentDevice.current?.on('registered', () => {
          console.log("Agent registered");
          setUserState(USER_STATE.READY);
        });

        currentDevice.current?.on('ready', () => {
          console.log("Agent ready");
          setUserState(USER_STATE.READY);
        });

        currentDevice.current?.on('connect', (connection: Call) => {
          console.log("Call connect");
          setConn(connection);
          //setUserState(USER_STATE.ON_CALL);
        });

        currentDevice.current?.on('disconnect', () => {
          console.log("Disconnect event");
          setUserState(USER_STATE.READY);
          setConn(null);
        });

        currentDevice.current?.on('error', (error: any) => {
          console.log("Error event detected: ", error);
          setUserState(USER_STATE.ERROR);
          setConn(null);
        });

        return () => {
          currentDevice.current?.disconnectAll();
          currentDevice.current?.destroy();

          currentDevice.current = undefined;
          setUserState(USER_STATE.OFFLINE);
          setConn(undefined);
        };
      } catch (error: any) {
        throw new Error(error);
      }
    } else {
      throw new Error("Voice token unavailable");
    }
  };

  const handleCall = async () => {
    if (userState !== USER_STATE.ON_CALL) {
      try {
        console.log('handlecall');
        const params: Record<string, string> = { 
          To: phoneNumber,
          // callerId: 'Seu caller ID aqui', // Se você tiver um callerId, adicione aqui
        };

        if (currentDevice.current) {
          currentDevice.current?.emit('connect');

          currentDevice.current?.connect({ 
            params,
            rtcConstraints: {
              audio: true
            }
          }).then((callInstance: Call) => {
            callInstance.on('accept', () => {
              console.log('Call accepted');
              setConn(conn);
              setUserState(USER_STATE.ON_CALL);
            });
            
            callInstance.on('answered', () => {
              console.log('Call answered');
            });
            
            callInstance.on('disconnect', () => {
              console.log('Call disconnected');
              setPhoneNumber("");
              setUserState(USER_STATE.READY);
              setConn(null);
            });

            callInstance.on('reject', () => {
              console.log('Call reject');
              setPhoneNumber("");
              setUserState(USER_STATE.READY);
              setConn(undefined);
            });
            
            callInstance.on('cancel', () => {
              console.log('Call canceled');
              setUserState(USER_STATE.READY);
              setConn(undefined);
            });
          });
        } else {
          setUserState(USER_STATE.OFFLINE);
          setConn(undefined);

          throw new Error("Unable to make call");
        }
      } catch (error: any) {
        throw new Error(error);
      }
    }
  };

  const handleHangup = () => {
    console.log('handlehungup');
    currentDevice.current?.disconnectAll();
    setUserState(USER_STATE.READY);
    setConn(undefined);
    setPhoneNumber("");
  };

  useEffect(() => {
    if ((!(userState === USER_STATE.ON_CALL)) && (isAValidPhoneNumber(phoneNumber))) {
      setCallButtonDisabled(false);
    } else if (userState === USER_STATE.ON_CALL) {
      setCallButtonDisabled(false);
    } else {
      setCallButtonDisabled(true);
    }
  }, [phoneNumber, userState]);

  useEffect(() => {
    if (twilioToken !== undefined) {
      init();
    }
  }, [twilioToken]);

  return (
    <div className='phone'>
      <CurrentState
        currentState={userState}
        setConn={setConn}
      >
        {userState === USER_STATE.INCOMING && <Incoming device={currentDevice.current} connection={conn} />}
        {userState === USER_STATE.ON_CALL && <OnCall connection={conn} />}
        <>
          <Dialler number={phoneNumber} setNumber={setPhoneNumber} />
          <div
            className="call"
            style={{ textAlign: 'center', marginTop: '20px' }}
          >
            <Button
              variant='contained'
              onClick={userState === USER_STATE.ON_CALL
                ? handleHangup
                : handleCall
              }
              disabled={callButtonDisabled}
              sx={{
                backgroundColor: userState === USER_STATE.ON_CALL ? 'red' : 'green',
                color: 'white',
                fontSize: '20px',
                padding: '12px 24px',
                borderRadius: '8px',
                width: '10%',
                '&:hover': {
                  backgroundColor: 'darkgreen',
                },
              }}
            >
              Ligar
            </Button>
          </div>
        </>
      </CurrentState>
    </div>
  );
}