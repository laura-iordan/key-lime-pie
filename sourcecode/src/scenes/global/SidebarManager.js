import { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import StackedLineChartOutlinedIcon from '@mui/icons-material/StackedLineChartOutlined';
import { mainTheme } from "../../theme";
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import url from '../../get_php_link';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';


const Item = ({ title, to, icon, selected, setSelected, user, idUser, theme}) => {
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: '#f4ffe9'
      }}
      onClick={() => window.location.reload()}
      icon={icon}
    >
      <Typography component='div'>{title}</Typography>
      <Link to={`${to}/${idUser}`} />
    </MenuItem>
    
  );
};

const SidebarManager = (props) => { 
  const { idUser } = useParams();
  const nav = useNavigate();
  console.log(idUser);
  

  const [user, setUser] = useState({
    id_role: 3,
    name: "",
    surname: "",
    SSN: 0,
    address: "",
    phone_no: "",
    hourly_fee: 0,
    status: 1,
    email:""
  });

 

  useEffect(() => {
    axios.post(url+'get_employee.php?id_user='+idUser)
    .then(function(response) {
      console.log(response.data);
      setUser(response.data);
  })
      .catch(error => console.error(error));
  }, []);

  const theme = mainTheme;
  const colors = theme.palette;
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary.light} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#ceff9d !important",
        },
        "& .pro-menu-item.active": {
          color: "#000000 !important",
        }
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: theme.green[900],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography component='div' variant="h3" color={colors.primary.dark}>
                  MANAGER
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box textAlign="center">
                <Typography
                component='div'
                  variant="h2"
                  color={theme.green[900]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {user.surname + ' ' + user.name}
                </Typography>
                <Typography component='div' variant="h5" color={colors.primary.dark}>
                {user.email}
                </Typography>
              </Box>
            </Box>
          )}

          

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/manager/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              user={user}
              setUser={setUser}
              props={props}
              idUser={idUser}
              onClick={() => {nav(`/manager/dashboard/${idUser}`)}}
              theme={theme}
            />

            <Typography
            component='div'
              variant="h6"
              color={theme.green[900]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/manager/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              user={user}
              setUser={setUser}
              props={props}
              idUser={idUser}
              onClick={() => {nav(`/manager/team/${idUser}`)}}
              theme={theme}
            />
            <Item
              title="Tasks"
              to="/manager/task"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              user={user}
              setUser={setUser}
              props={props}
              idUser={idUser}
              onClick={() => {nav(`/manager/task/${idUser}`)}}
              theme={theme}
            />
            <Item
              title="Projects"
              to="/manager/project"
              icon={<AccountBalanceWalletOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              user={user}
              setUser={setUser}
              props={props}
              idUser={idUser}
              onClick={() => {nav(`/manager/project/${idUser}`)}}
              theme={theme}
            />
            <Typography
            component='div'
              variant="h6"
              color={theme.green[900]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/manager/barChart"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              user={user}
              setUser={setUser}
              props={props}
              idUser={idUser}
              onClick={() => {nav("/manager/barChart")}}
              theme={theme}
            />
            <Item
              title="Bar Chart"
              to="/manager/barChart2"
              icon={<StackedBarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected} 
              user={user}
              setUser={setUser}
              props={props}
              idUser={idUser}
              onClick={() => {nav("/manager/barChart2")}}
              theme={theme}
            />
            <Item
              title="Pie Chart"
              to="/manager/pieChart"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              user={user}
              setUser={setUser}
              props={props}
              idUser={idUser}
              onClick={() => {nav("/manager/pieChart")}}
              theme={theme}
            />
            <Item
              title="Line Chart"
              to="/manager/lineChart"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              user={user}
              setUser={setUser}
              props={props}
              idUser={idUser}
              onClick={() => {nav("/manager/lineChart")}}
              theme={theme}
            />
            <Item
              title="Line Chart"
              to="/manager/bumpChart"
              icon={<StackedLineChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              user={user}
              setUser={setUser}
              props={props}
              idUser={idUser}
              onClick={() => {nav("/manager/bumpChart")}}
              theme={theme}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
    
  );
};


export default SidebarManager;
