import React, { useState, useEffect, useMemo } from "react";
import url from "../../get_php_link";
import { Box, Typography, Button,IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import {Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
//import moment from 'moment';

function Tasks() {
  const { idUser } = useParams();
  const [tasks, setTasks] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  console.log(tasks[tasks.length-1]);



  let opt1= [];
  for(var i=0; i<employees.length; i++){
    var obj = {};
    obj['value']=employees[i]['id_employee'];
    obj['label']=employees[i]['name'] + ' ' + employees[i]['surname'];
    opt1.push(obj);
  }

  let opt2= [];
  for( i=0; i<projects.length; i++){
    obj = {};
    obj['value']=projects[i]['id_project'];
    obj['label']=projects[i]['project_name'];
    opt2.push(obj);
  }

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
  }, [loading]);

  useEffect(() => {
    fetch(url+'get_all_tasks.php')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error(error));
  }, [loading]);


  const handleUpdate = (row) => { 
    console.log(row);         
    let fData = new FormData();
    fData.append('id_task', row.id_task)
    fData.append('task_name', row.task_name);
    fData.append('id_employee', row.employee_name);
    fData.append('id_project', row.project_name);
    fData.append('starting_date', row.starting_date);
    fData.append('target_date', row.target_date);
    fData.append('ending_date', row.ending_date);
    console.log(row.starting_date);

    axios.post(url+'update_task.php', fData)
    .then(response=>response.data)
    .catch(error=>alert(error)); 
    
    if(loading === true){
      setLoading(false);
    } else{
      setLoading(true);
    }  
}

  const columns = useMemo(
    () => [      
        { field: "id_tasks", headerName: "ID", width: 60 , hide: true},  
        { field: "task_name", headerName: "Task", flex: 1 , editable: true},    
        {field:'employee_name', headerName:'Name', flex: 1, editable: true, type: 'singleSelect', 
    valueOptions: opt1},
        {field:'project_name', headerName:'Project', flex: 1, editable: true, type: 'singleSelect', 
    valueOptions: opt2},
    { field: "starting_date", headerName: "Starting date", flex: 1, editable: true},
//valueGetter: (tasks)=>moment(tasks.row.starting_date.date).format('YYYY-MM-DD')},
    { field: "target_date", headerName: "Target Date", flex: 1 , editable: true}, 
    //valueGetter: (tasks)=>moment(tasks.row.target_date.date).format('YYYY-MM-DD')},
    { field: "ending_date", headerName: "Ending Date", flex: 1 , editable: true}
    /*valueGetter: (tasks)=>{if(tasks.row.ending_date === null){
        return null;
    }else{
        return moment(tasks.row.ending_date.date).format('YYYY-MM-DD')
    }}}*/,
        {
            field: "action",
            headerName: "Action",
            sortable: false,
            renderCell: ({ row }) =>[
            <IconButton  onClick={() => navigate(`/manager/updateTask/${idUser}/${row.id_task}`)} className="material-icons-outlined" type="button" sx={{p: 1}}>
            <EditOutlinedIcon />
            </IconButton>,
            <IconButton  onClick={() => handleUpdate(row)} className="material-icons-outlined" type="button" sx={{p: 1}}>
            <SaveOutlinedIcon />
            </IconButton>
              ]
          }    ],
   // eslint-disable-next-line react-hooks/exhaustive-deps
   [opt1, opt2, loading]
  );

  



  return (
    <Box
      m="40px 0 0 0"
      height="75vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .name-column--cell": {
          color: "#8f8f8f",
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "#f8f8f8",
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: "#f8f8f8",
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: "#f8f8f8",
        },
        "& .MuiCheckbox-root": {
          color: "#8f8f8f !important",
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `#B5AF30 !important`,
        },
      }}
    >
      <Box m="20px">
        <Typography>
          <Header title="Tasks" />
        </Typography>
        <Box
  m={1}
 //margin
  display="flex"
  justifyContent="flex-end"
  alignItems="flex-end"
>
      <Button size="large" variant="contained" 
        onClick={()=>{navigate(`/manager/addTask/${idUser}`)}}>Add Task</Button>
      </Box>
        <Box height="75vh" sx={{ margin: "50px" }}>
        
          <DataGrid
            checkboxSelection
            columns={columns}
            rows={tasks}
            getRowId={(row) => row.id_task}
            components={{ Toolbar: GridToolbar }}
          />

        </Box>
        
      </Box>
    </Box>
    
  );
}

export default Tasks;
