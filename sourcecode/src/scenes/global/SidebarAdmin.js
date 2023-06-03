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
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { mainTheme } from "../../theme";
import url from '../../get_php_link';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


const Item = ({ title, to, icon, selected, setSelected, user, idUser }) => {
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: '#f4ffe9',
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={`${to}/${idUser}`} />
    </MenuItem>
  );
};

const SidebarManager = (props) => {
  const { idUser } = useParams();
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

  const nav = useNavigate();

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
                <Typography variant="h3" color={colors.primary.dark}>
                  ADMIN
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
                  variant="h2"
                  color={theme.green[900]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {user.surname + ' ' + user.name}
                </Typography>
                <Typography variant="h5" color={colors.primary.dark}>
                  {user.email}
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Admin"
              to="/admin"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              user={user}
              setUser={setUser}
              props={props}
              idUser={idUser}
              onClick={() => {nav(`/admin/${idUser}`)}}
            />

            <Typography
              variant="h6"
              color={theme.green[900]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title=" Teams"
              to="/admin/teams"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              user={user}
              setUser={setUser}
              props={props}
              idUser={idUser}
              onClick={() => {nav(`/admin/teams/${idUser}`)}}
            />
            <Item
              title="Projects"
              to="/admin/projects"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              user={user}
              setUser={setUser}
              props={props}
              idUser={idUser}
              onClick={() => {nav(`/admin/projects/${idUser}`)}}
            />
            <Typography
              variant="h6"
              color={theme.green[900]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/admin/barChartAdmin"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              user={user}
              setUser={setUser}
              props={props}
              idUser={idUser}
              onClick={() => {nav(`/admin/barChartAdmin/${idUser}`)}}
            />
            <Item
              title="Pie Chart"
              to="/admin/pieChartAdmin"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              user={user}
              setUser={setUser}
              props={props}
              idUser={idUser}
              onClick={() => {nav(`/admin/pieChartAdmin/${idUser}`)}}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SidebarManager;
