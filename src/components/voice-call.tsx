import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Device } from "@twilio/voice-sdk";

const VoiceCall = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const callingToken = useRef<any>(null);
  const device = useRef<any>(null);

  useEffect(() => {
    // Fetch authentication token from the server
    const fetchToken = async () => {
      try {
        const response = await axios.get('/api/token');
        callingToken.current = response.data.token);
      } catch (error: any) {
        console.error('Error fetching token:', error);
      }
    };

    fetchToken();
  }, []);

  const handleCall = () => {
    try {
      device.current = new Device(callingToken.current, {
        // logLevel: 1,
        // Set Opus as our preferred codec. Opus generally performs better, requiring less bandwidth and
        // providing better audio quality in restrained network conditions.
        codecPreferences: ['opus', 'pcmu']
      });
      // Device must be registered in order to receive incoming calls
      device.current.register();

      const params = {
        // get the phone number to call from the DOM
        // Record: true,

        To: receiverId,
        callerId
      };
      if (device.current) {
        const call = await device.current.connect({ params });
        
        callInstance.on('accept', () => {
          console.log({ callInstance });
        });
        callInstance.on('ringing', () => {
                 });
        callInstance.on('answered', () => {
          
        });
        callInstance.on('connected', () => {
          
        });
        callInstance.on('disconnect', () => {
          
        });
        callInstance.on('cancel', () => {
          
        });
      } else {
        throw new Error('Unable to make call');
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div>
      <h1>Ligar</h1>
      <input
        type="text"
        value={phoneNumber}
        onChange={e => setPhoneNumber(e.target.value)}
        placeholder="Enter phone number"
      />
      <button onClick={handleCall}>Call</button>
    </div>
  );
};

export default VoiceCall;