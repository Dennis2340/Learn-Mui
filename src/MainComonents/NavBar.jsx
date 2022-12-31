import React, {useState} from 'react'
import Box from "@mui/material/Box"
import {Pets} from "@mui/icons-material"
import {AppBar, styled, Toolbar, Typography} from "@mui/material"
import {borderRadius} from "@mui/system";
import InputBase from "@mui/material/InputBase"
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MenuItem from '@mui/material/MenuItem';
import  Menu from '@mui/material/Menu';


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%"
}))

const Icons = styled(Box)(({theme}) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}))

const UserBox = styled(Box)(({theme}) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}))

function NavBar() {
  
  const [open,setOpen] = useState(false)

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs: "none", sm: "block"}}}>
          Learn Mui
        </Typography>
        <Pets sx={{display:{xs: "block", sm: "none"}}} />
        <Search><InputBase placeholder="search..."/></Search>
        <Icons>
          <Badge badgeContent={4} color="error"
           anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          >
           <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <CircleNotificationsIcon/>
          </Badge>
          <Avatar onClick={e => setOpen(true)} sx={{width: 36, height: 36}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Icons>
        <UserBox onClick={e => setOpen(true)} >
         <Avatar sx={{width: 36, height: 36}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
         <Typography variant="span">
            Dennis
         </Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
} 

export default NavBar