import React, {useState, useEffect} from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from 'axios';
import url from '../../get_php_link';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {useNavigate, useParams } from "react-router-dom";
import { Typography } from '@mui/material';
import { mainTheme } from '../../theme';




function AddTask(){
    const navigate = useNavigate();
    const { idUser} = useParams();
    const [taskName, setTaskName] = useState('');
    const [idEmployee, setIdEmployee] = useState(0);
    const [idProject, setIdProject] = useState();
    const [startingDate, setStartingDate] = useState('');
    const [targetDate, setTargetDate] = useState();
    const [employees, setEmployees] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      fetch(url+'get_projects.php')
        .then(response => response.json())
        .then(data => setProjects(data))
        .catch(error => console.error(error));
    }, []);

    useEffect(() => {
      fetch(url+'get_employees.php')
        .then(response => response.json())
        .then(data => setEmployees(data))
        .catch(error => console.error(error));
    }, []);
    
    const handleSubmit = () => {
          if(taskName.length === 0){
              alert("Username is blank!");
          } else if(startingDate.length === 0){
              alert("Email is blank!");
          } else{
              
  
              let fData = new FormData();
              fData.append('task_name', taskName);
              fData.append('id_employee', idEmployee);
              fData.append('id_project', idProject);
              fData.append('starting_date', startingDate);
              fData.append('target_date', targetDate);
              console.log(fData);
  
              axios.post(url+'add_task.php', fData)
              .then(response=>alert(response.data))
              .catch(error=>alert(error));                  
              }
              navigate(`/manager/task/${idUser}`)
          }
    const handleChangeEmployee=(e)=>{
      setIdEmployee(e.target.value);
    }

    const handleChangeProject=(e)=>{
      setIdProject(e.target.value);
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
            id="taskName"
            label="Task Name"
            name="taskName"
            autoComplete="taskName"
            autoFocus
            value={taskName} 
            onChange={(e)=>setTaskName(e.target.value)}
          />
          <InputLabel id="employee-label">Employee</InputLabel>
            <Select
              sx={{       
                width: 250,
                height: 50,
                background: '#ffffff'
              }}

              value={idEmployee}
              labelId="role-label"
              id="role-select"
              label="Role"
              onChange={handleChangeEmployee}
              >
              {employees.map(employee => (
                <MenuItem value={employee.id_employee}>{employee.name + ' ' + employee.surname}</MenuItem>
              ))}

            </Select>
            <InputLabel id="project-label">Project</InputLabel>
            <Select
              sx={{       
                width: 250,
                height: 50,
                background: '#ffffff'
              }}

              value={idProject}
              labelId="project-label"
              id="project-select"
              label="Project"
              onChange={handleChangeProject}
              >
              {projects.map(project => (
                <MenuItem value={project.id_project}>{project.project_name}</MenuItem>
              ))}

            </Select>
            <TextField
            backgroundColor='#ffffff'
            margin="normal"
            required
            fullWidth
            id="startingDate"
            label="Starting Date"
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
            label="Target Date"
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

export default AddTask;