import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Link } from "react-router-dom";


const drawerWidth = 240;

export default function SideBarManager() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
            <ListItem key="Projects" disablePadding>
              <ListItemButton component={Link} to="/">
                <ListItemText primary="Your Projects" />
              </ListItemButton>
            </ListItem>
            <ListItem key="Team" disablePadding>
              <ListItemButton component={Link} to="/team">
                <ListItemText primary="Your Team" />
              </ListItemButton>
            </ListItem>
            <ListItem key="Reports" disablePadding>
              <ListItemButton component={Link} to="/reports">
                <ListItemText primary="Your Reports" />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
      </Box>
    </Box>
  );
}