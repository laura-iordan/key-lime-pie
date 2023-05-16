import { IconButton } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { InputBase } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Icon from '@mui/material/Icon';
import * as React from 'react';
import Box from '@mui/material/Box';
import { mainTheme } from "../../theme"
import logo from '../../resources/logo.png'
import { Padding, PaddingOutlined } from "@mui/icons-material";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { useNavigate } from "react-router-dom";

const Topbar = () => {
    const navigate = useNavigate();
    const theme = mainTheme;
    const colors = theme.palette;
    return (
        <Box display="flex" justifyContent="space-between"  sx={{
            display: "center",
            backgroundColor: colors.primary.dark,
            borderRadius: "3px"
            }} >

            <img src={logo} style={{
                width: '90px', 
                height: '90px',
                marginLeft: '20px',
                marginBottom: '10px',
                marginTop: '15px'
            }}/>

            <Box display="flex" justifyContent="space-between">
                <Box sx={{
                    display: "flex",
                    backgroundColor: colors.primary.light,
                    borderRadius: "3px",
                    height: '35px',
                    alignSelf: 'center',
                    }}> 
                    <InputBase sx={{ml: 2, flex: 1}} placeholder="Search">
                        <IconButton type="button" sx={{p: 1}}>
                            <SearchIcon>
                            </SearchIcon>
                        </IconButton>
                    </InputBase>
                </Box>

                <Box display="flex" justifyContent="flex-end" sx={{
                    alignSelf: 'center',
                    paddingLeft: '30px',
                    marginRight: '20px',
                    }}>
                    <Icon className="material-icons-outlined" sx = {{
                        marginInlineEnd: '5px',
                        color: '#f4ffe9'
                    }}>notifications_outlined_icon</Icon>
                    <Icon className="material-icons-outlined" sx = {{
                        marginInlineEnd: '5px',
                        color: '#f4ffe9'
                    }}>settings_outlined_icon</Icon>
                    <Icon className="material-icons-outlined" sx = {{
                        marginInlineEnd: '5px',
                        color: '#f4ffe9'
                    }}>person_outlined_icon</Icon>
                    <IconButton onClick={() => navigate(`/`)}>
                        <ExitToAppOutlinedIcon />
                    </IconButton>
                </Box>

            </Box>

        </Box>
    )
}

export default Topbar;