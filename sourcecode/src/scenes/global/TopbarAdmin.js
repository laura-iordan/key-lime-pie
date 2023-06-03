import { IconButton } from "@mui/material";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Icon from '@mui/material/Icon';
import * as React from 'react';
import Box from '@mui/material/Box';
import { mainTheme } from "../../theme";
import logo from '../../resources/logo.png';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { useNavigate, useParams } from "react-router-dom";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

const TopbarAdmin = () => {
    const { idUser } = useParams();
    console.log(idUser);
    const navigate = useNavigate();
    const theme = mainTheme;
    const colors = theme.palette;
    return (
        <Box display="flex" justifyContent="space-between"  sx={{
            display: "center",
            backgroundColor: colors.primary.dark,
            borderRadius: "3px"
            }} >

            <img alt="" src={logo} style={{
                width: '90px', 
                height: '90px',
                marginLeft: '20px',
                marginBottom: '10px',
                marginTop: '15px'
            }}/>

            <Box display="flex" justifyContent="space-between">

                <Box display="flex" justifyContent="flex-end" sx={{
                    alignSelf: 'center',
                    paddingLeft: '30px',
                    marginRight: '20px',
                    }}>
                    <IconButton onClick={() => navigate(`/admin/profile/${idUser}`)}>
                        <Person2OutlinedIcon />
                    </IconButton>
                    <IconButton onClick={() => navigate(`/`)}>
                        <ExitToAppOutlinedIcon />
                    </IconButton>
                </Box>

            </Box>

        </Box>
    )
}

export default TopbarAdmin;