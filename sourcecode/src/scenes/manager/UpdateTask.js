import React, {useState, useEffect} from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import axios from 'axios';
import url from '../../get_php_link';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {Link } from "react-router-dom";
import { Typography } from '@mui/material';
import { mainTheme } from '../../theme';
import { useParams } from "react-router-dom";
import moment from 'moment';




function UpdateTask(){

    const { id } = useParams();
    const [task, setTask] = useState({
      task_name: "",
      id_employee: 0,
      id_project: 0,
      starting_date: "",
      target_date: "",
      ending_date: ""
    });
    
    const [employees, setEmployees] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.post(url+'get_task1.php?id_task='+id)
        .then(function(response) {
          console.log(response.data);
          setTask(response.data);
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
        console.log(task.starting_date.date);  
        console.log(task.target_date.date);          
        console.log(task.ending_date.date);  
  
              let fData = new FormData();
              fData.append('id_task', id);
              fData.append('task_name', task.task_name);
              fData.append('id_employee', task.id_employee);
              fData.append('id_project', task.id_project);
              fData.append('starting_date', task.starting_date.date);
              fData.append('target_date', task.target_date.date);
              fData.append('target_date', task.ending_date.date);
              
  
              axios.post(url+'update_task.php', fData)
              .then(response=>alert(response.data))
              .catch(error=>alert(error));                  
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
            id="taskName"
            label="Task Name"
            name="taskName"
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
              labelId="role-label"
              id="role-select"
              label="Role"
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
              labelId="status-label"
              id="status-select"
              label="Status"
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
            id="startingDate"
            label="Starting Date"
            name="startingDate"
            autoComplete="startingDate"
            autoFocus
            value={moment(task.starting_date.date).format("DD-MM-YYYY")} 
            onChange={handleChange}
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
            value={moment(task.target_date.date).format("DD-MM-YYYY")} 
            onChange={handleChange}
          />
          <TextField
            backgroundColor='#ffffff'
            margin="normal"
            required
            fullWidth
            id="endingDate"
            label="Ending Date"
            name="endingDate"
            autoComplete="endingDate"
            autoFocus
            value={task.ending_date!=null ? moment(task.ending_date.date).format("DD-MM-YYYY"):null} 
            onChange={handleChange}
          />
            
          
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            component={Link} to="/manager/task"
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