import React, { useState } from "react";
import { Device, Call } from "@twilio/voice-sdk";
import { Button } from "@mui/material";

import { useCall } from "../../contexts/call/hooks";
//import { useUser } from "../../contexts/user/hooks";
//import { useAppSelector } from "../../store/hooks";
//import { selectQueueConversation } from "../../store/conversations/slice";
import { Dialler } from "./Dialler";
// import { KeypadButton } from "./KeypadButton";
import { Incoming } from "./Incoming";
import { OnCall } from "./OnCall";
import { FakeState } from "./FakeState";
import { USER_STATE } from "../../types";

import "./Phone.module.css";

export const Phone: React.FC = () => {
  const { getDevice, userState } = useCall();
  //const { user } = useUser();

  //const queue = useAppSelector(selectQueueConversation);

  const [number, setNumber] = useState<string>("");
  const [conn, setConn] = useState<Call | undefined>(undefined);
  const [device, setDevice] = useState<Device | undefined>(undefined);
  
  /*const handleCall = () => {
    const phone = getDevice();
    setDevice(phone); // STATE TBM É IMPORTANTE
  };*/

  const handleHangup = () => {
    console.log('handlehungup');
    device?.disconnectAll();
    device?.destroy();
    setDevice(undefined);
  };

  const handleCall = async () => {
    try {
      console.log('handlecall');
      const device = getDevice();
      setDevice(device);
      device.register();

      const params = {
        To: number, // Assumindo que você queira ligar para o número que o usuário digitou
        // callerId: 'Seu caller ID aqui', // Se você tiver um callerId, adicione aqui
      };

      if (device) {
        const callInstance: Call = await device.connect({ params });

        if (callInstance) {
          console.log(callInstance);
          setConn(callInstance);
        }

        callInstance.on('accept', () => {
          console.log('Call accepted');
        });
        
        callInstance.on('ringing', () => {
          console.log('Call is ringing');
        });
        
        callInstance.on('answered', () => {
          console.log('Call answered');
        });
        
        callInstance.on('connected', () => {
          console.log('Call connected');
        });
        
        callInstance.on('disconnect', () => {
          console.log('Call disconnected');
        });
        
        callInstance.on('cancel', () => {
          console.log('Call canceled');
        });
      } else {
        throw new Error('Unable to make call');
      }
    } catch (error: unknown) {
      console.log(error);
    }
  };

  /*useEffect(() => {
    const startCall = async () => {
      if (device == undefined) {
        return
      }

      const call = await device.connect({ To: number });

      if (call) {
        setConn(call);
      }
    }
    startCall();
  },[device]);*/

  let render;
  if (conn) {
    if (userState === USER_STATE.INCOMING) {
      render = <Incoming device={device} connection={conn}></Incoming>;
    } else if (userState === USER_STATE.ON_CALL) {
      render = <OnCall handleHangup={handleHangup} connection={conn}></OnCall>;
    }
  } else {
    render = (
      <>
        <Dialler number={number} setNumber={setNumber} />
        <div
          className="call"
          style={{ textAlign: 'center', marginTop: '20px' }}
        >
          <Button
            variant='contained'
            onClick={handleCall}
            sx={{
              backgroundColor: 'green',
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
    );
  }

  return (
    <div className='phone'>
      <FakeState
        currentState={userState}
        setConn={setConn}
      ></FakeState>
      {render}
      <p className="status">{userState}</p>
    </div>
  );
}