import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Device, Call } from "@twilio/voice-sdk";

const VoiceCall: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const callingToken = useRef<string | null>(null);
  const device = useRef<Device | null>(null);

  useEffect(() => {
    // Fetch authentication token from the server
    const fetchToken = async () => {
      try {
        const response = await axios.get('/api/token');
        callingToken.current = response.data.token;
      } catch (error: unknown) {
        console.error('Error fetching token:', error);
      }
    };

    fetchToken();
  }, []);

  const handleCall = async () => {
    try {
      if (!callingToken.current) {
        throw new Error('Calling token not available');
      }
      /*
      device.current = new Device(callingToken.current, {
        codecPreferences: ['opus', 'pcmu'],
      });

      // Device must be registered in order to receive incoming calls
      device.current.register();
      */
      const params = {
        To: phoneNumber, // Assumindo que você queira ligar para o número que o usuário digitou
        // callerId: 'Seu caller ID aqui', // Se você tiver um callerId, adicione aqui
      };

      if (device.current) {
        const callInstance: Call = await device.current.connect({ params });

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
      /*
      if (error instanceof TwilioError) {
        console.error('Twilio Error:', error);
      } else {
        console.error('Error:', error);
      }
      */
      console.log(error);  
    }
  };

  return (
    <div>
      <h1>Ligar</h1>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Enter phone number"
      />
      <button onClick={handleCall}>Call</button>
    </div>
  );
};

export default VoiceCall;
