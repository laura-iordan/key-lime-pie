import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from 'axios';
import url from '../../get_php_link';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {Link } from "react-router-dom";
import { mainTheme } from '../../theme';
import { Typography } from '@mui/material';

function UpdateTeam(){

    const { id } = useParams();
    const [team, setTeam] = useState({
        id_manager: 0,
        team_name: "",
        manager_name: ""
        });
    const [managers, setManagers] = useState([]);
    

    useEffect(() => {
      axios.post(url+'get_team.php?id_team='+id)
      .then(function(response) {
        console.log(response.data);
        setTeam(response.data);
    })
        .catch(error => console.error(error));
    }, [id]);

 

    useEffect(() => {
        fetch(url+'get_managers.php')
          .then((response) => response.json())
          .then((data) => setManagers(data))
          .catch((error) => console.error(error));
      }, []);

    const handleChange = (e) => {
      const teamClone = { ...team };
      teamClone[e.target.name] = e.target.value;
      setTeam(teamClone);
    };
    
    const handleSubmit = () => {          
              let fData = new FormData();
              fData.append('id_teams', id);
              fData.append('team_name', team.team_name);
              fData.append('id_manager', team.id_manager);

  
              axios.post(url+'update_team.php', fData)
              .then(response=>response.data)
              .catch(error=>alert(error));                  
              
          }


    return (
    <div style = {{
        paddingLeft: '450px',
        paddingRight: '450px'
        
      }}> 
      <Typography variant='h1'>
          <p style={{
            textAlign: 'center'
          }}>
          Update Employee
          </p>
        </Typography>
        <Box className="rounded-corners" style = {{
          padding: '50px',
          backgroundColor: mainTheme.green[100]
          }}> 
        <Box component="form" noValidate sx={{ mt: 1,
          '.MuiTextField-root': {
            background: '#ffffff'
          } }}>
          
          <TextField
            margin="normal"
            required
            fullWidth
            id="team_name"
            label="Team Name"
            name="team_name"
            autoComplete="team_name"
            autoFocus
            value={team.team_name} 
            onChange={handleChange}
          />
          <InputLabel id="manager-label">Manager Name</InputLabel>
            <Select
              sx={{       
                width: 250,
                height: 50,
                background: '#ffffff'
              }}

              value={team.id_manager}
              labelId="manager-label"
              id="manager-select"
              label="Manager"
              name="id_manager"
              onChange={handleChange}
              >
              {managers.map(manager => (
                <MenuItem key={manager.id_manager} name="id_manager" value={manager.id_manager}>{manager.manager_name}</MenuItem>
              ))}

            </Select>
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            component={Link} to="/admin/teams"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => handleSubmit()}
          >
            <Typography>
                Update
            </Typography>
          </Button>
          </Box>
        </Box>
    </div>);
}

export default UpdateTeam;