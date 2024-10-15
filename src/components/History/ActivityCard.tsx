import React from 'react';
import { Box, Typography, TextField, IconButton, List, ListItem, ListItemText } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message'; 

const ActivityCard: React.FC = () => {

  const activityData = [
    { id: 1, number: '554355', startTime: '15:43', status: 'Espera 03:45' },
    { id: 2, number: '678902', startTime: '12:30', status: 'Espera 01:15' },
    { id: 3, number: '112233', startTime: '09:45', status: 'Espera 02:30' },
    { id: 4, number: '445566', startTime: '14:00', status: 'Espera 01:45' },
    { id: 5, number: '778899', startTime: '11:20', status: 'Espera 03:10' },
    { id: 6, number: '334455', startTime: '13:15', status: 'Espera 02:20' },
    { id: 7, number: '990011', startTime: '10:50', status: 'Espera 01:05' },
    { id: 8, number: '556677', startTime: '16:05', status: 'Espera 00:45' },
  ];

  const titles = ['Atividade robô em tempo real', 'Atividade atendente em tempo real'];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 4, backgroundColor: '#202226', minHeight: '100vh' }}>
      {titles.map((title, idx) => (
        <Box key={idx} sx={{ width: '48%', borderRadius: 2, padding: 2 }}>
          <Typography variant="h6" sx={{ fontSize: 14, color: 'white', marginBottom: 2 }}>
            {title}
          </Typography>
          <TextField
            placeholder="Buscar"
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              marginBottom: 3,
              backgroundColor: '#3A3B41',
              borderRadius: 1,
              input: { color: 'white' },
            }}
          />
          <List>
            {activityData.map((activity) => (
              <ListItem key={activity.id} sx={{ paddingY: 1, display: 'flex', alignItems: 'center' }}>
                <IconButton edge="start" sx={{ color: 'white', marginRight: 2 }}>
                  <MessageIcon />
                </IconButton>
                <ListItemText
                  primary={
                    <Typography sx={{ color: 'white' }}>
                      {activity.number} início: {activity.startTime} status: {activity.status}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};

export default ActivityCard;
