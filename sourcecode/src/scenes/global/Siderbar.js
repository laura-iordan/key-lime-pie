import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {Link } from "react-router-dom";
import { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { HomeOutlinedIcon } from '@mui/icons-material/HomeOutlined';
import { PeopleOutlinedIcon } from '@mui/icons-material/PeopleOutlined';
import { ContactsOutlinedIcon } from '@mui/icons-material/ContactsOutlined';
import { PersonOutlinedIcon } from '@mui/icons-material/PersonOutlined';
import { CalendarTodayOutlinedIcon } from '@mui/icons-material/CalendarTodayOutlined';
import { BarChartOutlinedIcon } from '@mui/icons-material/BarChartOutlined';
import { PieChartOutlineOutlinedIcon } from '@mui/icons-material/PieChartOutlineOutlined';
import { TimelineOutlinedIcon } from '@mui/icons-material/TimelineOutlined';
import { MenuOutlinedIcon } from '@mui/icons-material/MenuOutlined';
import { mainTheme } from '../../theme';

const Siderbar = () => {
  const theme = mainTheme;
  const colors = theme.palette;
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Admin");
  return (
    <Box
      sx = {{
        display: 'flex',
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important"
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important"
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important"
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important"
        }
      }}
    >
      <Sidebar>
        <Menu>
            <MenuItem component={<Link to="/admin" />}>Employees</MenuItem>
            <MenuItem component={<Link to="/admin/projects" />}>Projects</MenuItem>
            <MenuItem component={<Link to="/admin/teams" />}>Teams</MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );

};

export default Siderbar;


/*
const drawerWidth = 240;

export default function PermanentDrawerLeft() {
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
            <ListItem key="Employees" disablePadding>
              <ListItemButton component={Link} to="/">
                <ListItemText primary="Employees" />
              </ListItemButton>
            </ListItem>
            <ListItem key="Projects" disablePadding>
              <ListItemButton component={Link} to="/projects">
                <ListItemText primary="Projects" />
              </ListItemButton>
            </ListItem>
            <ListItem key="Teams" disablePadding>
              <ListItemButton component={Link} to="/teams">
                <ListItemText primary="Teams" />
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
*/

