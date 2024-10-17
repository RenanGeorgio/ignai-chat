import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        height: '40px', 
        backgroundColor: '#202226', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        bottom: 0,
      }}
    >
      <Box
        sx={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: isOnline ? 'green' : 'red',
          marginRight: '8px',
        }}
      />
      <Typography variant="body2" color="white">
        {isOnline ? 'Online' : 'Offline'}
      </Typography>
    </Box>
  );
}

export default Footer;
