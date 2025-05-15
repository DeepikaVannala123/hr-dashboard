import React from 'react';
import {
  Card, CardContent, Typography, List, ListItem, ListItemText, Divider,
} from '@mui/material';

const AnnouncementsFeed = ({ announcements }: { announcements: any[] }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>Announcements</Typography>
        <List>
          {announcements.map((a, i) => (
            <React.Fragment key={a.id}>
              <ListItem>
                <ListItemText
                  primary={a.title}
                  secondary={`${a.author} — ${new Date(a.timestamp).toLocaleString()}`}
                />
              </ListItem>
              {i < announcements.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default AnnouncementsFeed;
