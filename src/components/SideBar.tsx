import React, { useState } from 'react'
import Header from './Header';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';




function SideBar () {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () =>{
    setSidebarOpen(!sidebarOpen);
  }
  return (
     <>
      <Header isLoggedIn={isLoggedIn} onToggleSidebar={toggleSidebar} />
      
      <Drawer anchor="left" open={sidebarOpen} onClose={toggleSidebar}>
        <List sx={{ width: 250 }}>
          <ListItem>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Settings" />
            
          </ListItem>
          {/* Add more sidebar items as needed */}
        </List>
      </Drawer>

      {/* Your main content goes here */}
    </>
  )
}

export default SideBar