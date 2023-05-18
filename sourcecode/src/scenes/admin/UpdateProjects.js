import React, {useState, useEffect, useMemo} from 'react';
import url from '../../get_php_link';
import { Box, Typography, IconButton } from "@mui/material";
import {DataGrid, GridToolbar} from '@mui/x-data-grid';
import Header from '../../components/Header';
import axios from 'axios';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import moment from 'moment';

function UpdateProjects() {


  const [projects, setProjects] = useState([]);
  const [managers,setManagers] = useState([]); // lista de manageri
  const [loading, setLoading] = useState(false);

  let options = [];
  for(var i=0; i<managers.length; i++){
    var obj = {};
    obj['value']=managers[i]['id_user'];
    obj['label']=managers[i]['manager_name'];
    options.push(obj);
  }

  const handleUpdate = (row) => { 
    console.log(row);         
    let fData = new FormData();
    fData.append('id_project', row.id_project)
    fData.append('project_name', row.project_name);
    fData.append('budget', row.budget);
    fData.append('hours', row.hours);
    fData.append('id_manager', row.manager_name);

    axios.post(url+'update_projects.php', fData)
    .then(response=>alert(response.data))
    .catch(error=>alert(error));  
    
    if(loading === true){
        setLoading(false);
      } else{
        setLoading(true);
      }  
    
}

  useEffect(() => {
    fetch(url + "get_mng.php")
      .then((response) => response.json())
      .then((data) => {
        setManagers(data);
      })
      .catch((error) => console.error(error));
  }, [loading]);

  useEffect(() => {
    fetch(url+'get_projects.php')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setProjects(data)})
      .catch(error => console.error(error));
  }, [loading]);

  const columns = useMemo(()=>[
    {field:'id_project', headerName:'ID', width:60},
    {field:'project_name', headerName:'Project Name', flex: 1,editable: true},
    {field:'budget', headerName:'Budget', type: "number", flex: 1, headerAlign: "left", align: "left", editable: true},
    {field:'hours', headerName:'Hours', type: "number", flex: 1, headerAlign: "left", align: "left",editable: true},
    //{field:'manager_name', headerName:'Manager', flex: 1},
    {field:'manager_name', headerName:'Manager', flex: 1, editable: true, type: 'singleSelect', 
    valueOptions: options},
    {
      field: 'id_manager',
      headerName: 'Manager ID',
      flex: 1,
      hide: true, // Set hide to true if you want to hide the column initially
    },
    { 
      field: 'starting_date', 
      headerName: 'Start', 
      flex: 1, 
      type: 'date', 
      valueGetter: (tasks)=>moment(tasks.row.starting_date.date).format('DD-MM-YYYY')
    },
    { 
      field: 'target_date', 
      headerName: 'Target', 
      flex: 1, 
      type: 'date', 
      valueGetter: (tasks)=>moment(tasks.row.target_date.date).format('DD-MM-YYYY')
    },

    {
      field: "action",
      headerName: "Action",
      sortable: false,
      renderCell: ({ row }) =>[
      <IconButton  onClick={() => handleUpdate(row)} className="material-icons-outlined" type="button" sx={{p: 1}}>
      <SaveOutlinedIcon />
      </IconButton>
        ]
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [options, loading])

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
              color: '#f8f8f8',
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: '#f8f8f8',
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: '#f8f8f8',
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: '#f8f8f8',
            },
            "& .MuiCheckbox-root": {
              color: '#8f8f8f !important',
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `#B5AF30 !important`,
            },
          }}
  >
    
    <Box m="20px">
    <Typography>
      <Header title="Projects" />
      </Typography>
      <Box
    height="75vh"
    sx = {{
      margin: '50px'
    }}>
      <DataGrid
      checkboxSelection
      columns={columns}
      rows={projects}
      getRowId={row=>row.id_project}
      components={{ Toolbar: GridToolbar }}
    >
    </DataGrid>
    </Box>
    </Box>
    
    
  </Box>
  )
}

export default UpdateProjects;