import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from "axios";
import url from "../../get_php_link";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { mainTheme } from '../../theme';
import { Typography } from '@mui/material';

function AddTeam() {
  const [teamName, setTeamName] = useState('');
  const [managers, setManagers] = useState([]);
  const [manager, setManager] = useState('');

  useEffect(() => {
    fetch(url+'get_managers.php')
      .then((response) => response.json())
      .then((data) => setManagers(data))
      .catch((error) => console.error(error));
  }, []);

  const handleInsert = () => {
    if (teamName.length === 0) {
      alert("Team name can not be blank!");
    } else {
      let fData = new FormData();
      fData.append("team_name", teamName);
      fData.append("manager", manager);
      
      console.log(teamName);
      console.log(manager);
      
      axios
        .post(url+'add_team.php',fData)
        .then((response) => alert(response.data))
        .catch((error) => alert(error));

      alert("New team created!");
    }
  };

  const handleManager = (e) => {
    setManager(e.target.value);
  };

  return (
    <div style = {{
      paddingLeft: '450px',
      paddingRight: '450px'
      
    }}>      <Typography variant='h1'>
          <p style={{
            textAlign: 'center'
          }}>
          Add Team
          </p>
        </Typography>
            <Box className="rounded-corners" style = {{
          padding: '50px',
          backgroundColor: mainTheme.green[100]
          }}> 
      <Box component="form" onSubmit={handleInsert} noValidate sx={{ mt: 1,
          '.MuiTextField-root': {
            background: '#ffffff'
          } }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="team_name"
          label="New Team's Name"
          name="name"
          autoComplete="Team X"
          autoFocus
          value={teamName.id_teams}
          onChange={(e) => setTeamName(e.target.value)}
        />

        <InputLabel id="manager-name"> New Team's Manager </InputLabel>
        <Select
          sx={{
            width: 250,
            height: 50,
          }}
          value={manager}
          labelId="manager-new-team"
          id="manager-select"
          label="Manager"
          onChange={handleManager}
        >
          {managers.map((manager) => (
            <MenuItem
              key={manager.id_manager}
              value={manager.id_manager}
            >
              {manager.manager_name}
            </MenuItem>
          ))}
        </Select>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          component={Link}
          to="/admin/teams"
          sx={{ mt: 3, mb: 2 }}
          onClick={() => handleInsert()}
        >
          Create New Team
        </Button>
      </Box>
      </Box>
    </div>
  );
}

export default AddTeam;
