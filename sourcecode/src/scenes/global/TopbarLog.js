import * as React from 'react';
import Box from '@mui/material/Box';
import { mainTheme } from "../../theme";
import logo from '../../resources/logo.png';


const TopbarLog = () => {
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
                </Box>

            </Box>

        </Box>
    )
}

export default TopbarLog;