import React, {useState, useEffect, useMemo} from 'react';
import url from '../../get_php_link';
import {Box, Typography} from '@mui/material';
import {DataGrid, GridToolbar} from '@mui/x-data-grid';
import Header from '../../components/Header';

function Projects() {

  const [projects, setProjects] = useState([]);

  const columns = useMemo(()=>[
    {field:'id_project', headerName:'ID', width:60},
    {field:'project_name', headerName:'Project Name', flex: 1,},
    {field:'budget', headerName:'Budget', type: "number", flex: 1, headerAlign: "left", align: "left"},
    {field:'hours', headerName:'Hours', type: "number", flex: 1, headerAlign: "left", align: "left",},
    {field:'manager_name', headerName:'Manager', flex: 1},
    { 
      field: 'starting_date', 
      headerName: 'Start', 
      flex: 1, 
      type: 'date', 
      valueFormatter: ({ value }) => new Date(value).toDateString(),
    },
    { 
      field: 'target_date', 
      headerName: 'Target', 
      flex: 1, 
      type: 'date', 
      valueFormatter: ({ value }) => new Date(value).toDateString()
    }
    



  ], [])

  useEffect(() => {
    fetch(url+'get_projects.php')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setProjects(data)})
      .catch(error => console.error(error));
  }, []);


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

export default Projects;