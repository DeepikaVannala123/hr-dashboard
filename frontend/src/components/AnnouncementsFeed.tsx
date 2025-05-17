import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const AnnouncementsFeed = ({ announcements }: { announcements: any[] }) => {
  return (
    <Box>
  <Typography  sx={{ mb: 2, mt: 4, textAlign: 'left', fontWeight: 'bold', color: '#1976d2', fontSize:'large' }}>
  Announcements
</Typography>
      {announcements.map((a) => (
        <Paper
          key={a.id}
          elevation={3}
          sx={{
            my: 2,
            p: 2,
            borderLeft: '5px solid #1976d2', // Adds a bold left border
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            {a.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
            {a.author} — {new Date(a.timestamp).toLocaleString()}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default AnnouncementsFeed;
