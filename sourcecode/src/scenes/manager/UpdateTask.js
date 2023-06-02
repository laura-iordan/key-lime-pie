import React, {useState, useEffect} from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from 'axios';
import url from '../../get_php_link';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {Link, useNavigate } from "react-router-dom";
import { Typography } from '@mui/material';
import { mainTheme } from '../../theme';
import { useParams } from "react-router-dom";
//import moment from 'moment';




function UpdateTask(){
  const navigate = useNavigate();

    const { idUser, id } = useParams();
    const [task, setTask] = useState({
      task_name: "",
      id_employee: 0,
      id_project: 0,
      starting_date: "",
      target_date: "",
      ending_date: ""
    });
    console.log(task.task_name);
    
    const [employees, setEmployees] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.post(url+'get_task1.php?id_task='+id)
        .then(function(response) {
          console.log(response.data[0]);
          setTask(response.data[0]);
      })
          .catch(error => console.error(error));
      }, [id]);

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
  
              let fData = new FormData();
              fData.append('id_task', id);
              fData.append('task_name', task.task_name);
              fData.append('id_employee', task.id_employee);
              fData.append('id_project', task.id_project);
              fData.append('starting_date', task.starting_date);
              fData.append('target_date', task.target_date);
              fData.append('ending_date', task.ending_date);
              
  
              axios.post(url+'update_task.php', fData)
              .then(response=>alert(response.data))
              .catch(error=>alert(error));   
              navigate(`/manager/task/${idUser}`)               
              }
          const handleChange = (e) => {
            const taskClone = { ...task };
            taskClone[e.target.name] = e.target.value;
            setTask(taskClone);
          };

    return (
      <div style = {{
        paddingLeft: '450px',
        paddingRight: '450px'
        
      }}>
        <Typography variant='h1'>
          <p style={{
            textAlign: 'center'
          }}>
          Update Task
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
            id="task_name"
            label="Task Name"
            name="task_name"
            autoComplete="taskName"
            autoFocus
            value={task.task_name} 
            onChange={handleChange}
          />
          <InputLabel id="employee-label">Employee</InputLabel>
            <Select
              sx={{       
                width: 250,
                height: 50,
                background: '#ffffff'
              }}

              value={task.id_employee}
              labelId="employee-label"
              id="employee-select"
              label="Role"
              name="id_employee"
              onChange={handleChange}
              >
              {employees.map(employee => (
                <MenuItem value={employee.id_employee}>{employee.name + ' ' + employee.surname}</MenuItem>
              ))}

            </Select>
            <InputLabel id="project-label">Status</InputLabel>
            <Select
              sx={{       
                width: 250,
                height: 50,
                background: '#ffffff'
              }}

              value={task.id_project}
              labelId="project-label"
              id="project-select"
              label="Status"
              name="id_project"
              onChange={handleChange}
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
            id="starting_date"
            label="Starting Date"
            name="starting_date"
            autoComplete="starting_date"
            autoFocus
            value={task.starting_date} 
            onChange={handleChange}
          />
          <TextField
            backgroundColor='#ffffff'
            margin="normal"
            required
            fullWidth
            id="target_date"
            label="Target Date"
            name="target_date"
            autoComplete="target_date"
            autoFocus
            value={task.target_date} 
            onChange={handleChange}
          />
          <TextField
            backgroundColor='#ffffff'
            margin="normal"
            required
            fullWidth
            id="ending_date"
            label="Ending Date"
            name="ending_date"
            autoComplete="ending_date"
            autoFocus
            value={task.ending_date!=null ? task.ending_date:null} 
            onChange={handleChange}
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

export default UpdateTask;