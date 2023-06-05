import React, {useState, useEffect} from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from 'axios';
import url from '../../get_php_link';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {useParams, useNavigate} from "react-router-dom";
import { Typography } from '@mui/material';
import { mainTheme } from '../../theme';




function AddProject(){
  const { idUser } = useParams();
  const navigate = useNavigate();
    const [projectName, setProjectName] = useState('');
    const [idManager, setIdManager] = useState();
    const [budget, setBudget] = useState();
    const [startingDate, setStartingDate] = useState();
    const [targetDate, setTargetDate] = useState();
    const [hours, setHours] = useState();
    const [managers, setManagers] = useState([]);

    useEffect(() => {
      fetch(url+'get_mng.php')
        .then(response => response.json())
        .then(data => setManagers(data))
        .catch(error => console.error(error));
    }, []);
    
    const handleSubmit = () => {
          if(projectName.length === 0){
              alert("Project name is blank!");
          } else if(startingDate.length === 0){
              alert("Starting date is blank!");
          } else{
              
  
              let fData = new FormData();
              fData.append('project_name', projectName);
              fData.append('id_manager', idManager);
              fData.append('budget', budget);
              fData.append('hours', hours);
              fData.append('starting_date', startingDate);
              fData.append('target_date', targetDate);
              console.log(fData);
  
              axios.post(url+'add_project.php', fData)
              .then(response=>response.data)
              .catch(error=>alert(error));                  
              }
              navigate(`/admin/project/${idUser}`)
          }
    const handleChangeManager=(e)=>{
      setIdManager(e.target.value);
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
          Add Task
          </p>
        </Typography>
        <Box className="rounded-corners" style = {{
          padding: '50px',
          backgroundColor: mainTheme.green[100]
          }}> 
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ 
          mt: 1,
          '.MuiTextField-root': {
            background: '#ffffff'
          } }}>
          <TextField
            backgroundColor='#ffffff'
            margin="normal"
            required
            fullWidth
            id="projectName"
            label="Project Name"
            name="projectName"
            autoComplete="projectName"
            autoFocus
            value={projectName} 
            onChange={(e)=>setProjectName(e.target.value)}
          />
          <InputLabel id="manager-label">Manager</InputLabel>
            <Select
              sx={{       
                width: 250,
                height: 50,
                background: '#ffffff'
              }}

              value={idManager}
              labelId="manager-label"
              id="manager-select"
              label="Manager"
              onChange={handleChangeManager}
              >
              {managers.map(manager => (
                <MenuItem value={manager.id_employee}>{manager.manager_name}</MenuItem>
              ))}

            </Select>
            <TextField
                backgroundColor='#ffffff'
                margin="normal"
                required
                fullWidth
                id="budget"
                label="Budget"
                name="budget"
                autoComplete="budget"
                autoFocus
                value={budget} 
                onChange={(e)=>setBudget(e.target.value)}
            />
            <TextField
                backgroundColor='#ffffff'
                margin="normal"
                required
                fullWidth
                id="hours"
                label="Hours"
                name="hours"
                autoComplete="hours"
                autoFocus
                value={hours} 
                onChange={(e)=>setHours(e.target.value)}
            />
            <TextField
                backgroundColor='#ffffff'
                margin="normal"
                required
                fullWidth
                id="startingDate"
                label="Starting Date YYYY-MM-DD"
                name="startingDate"
                autoComplete="startingDate"
                autoFocus
                value={startingDate} 
                onChange={(e)=>setStartingDate(e.target.value)}
            />
          <TextField
            backgroundColor='#ffffff'
            margin="normal"
            required
            fullWidth
            id="targetDate"
            label="Target Date YYYY-MM-DD"
            name="targetDate"
            autoComplete="targetDate"
            autoFocus
            value={targetDate} 
            onChange={(e)=>setTargetDate(e.target.value)}
          />
            
          
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => handleSubmit()}
          >
            <Typography>
              Submit
            </Typography>
            
          </Button>
        </Box>
    </Box>
      </div>
    );
}

export default AddProject;