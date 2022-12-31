import React from 'react'
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import List from "@mui/material/List"
import ListItem from '@mui/material/ListItem';

function RightBar() {
  return (
    <Box 
   
    flex={2}
    sx={{display: {xs: "none", sm: "block"}}}
    padding={2}
    marginTop={3}
    >
      <Box position="fixed">
        <Typography variant="h6" fontWeight={50}>Online Friends</Typography>
        <Box marginRight={10} magin={0}>
         <AvatarGroup  max={4}>
           <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
           <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
           <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
           <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
           <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
         </AvatarGroup>
       </Box>
         <Typography  variant="h6" fontWeight={50}>
           Latest Conversations
         </Typography>
        <Box>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        </Box>
      </Box>

    </Box>
  )
}


export default  RightBar