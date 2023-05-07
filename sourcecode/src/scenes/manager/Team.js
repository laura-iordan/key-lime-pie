import React, {useState, useEffect, useMemo} from 'react';
import url from '../../get_php_link';
import {Box, Typography} from '@mui/material';
import {DataGrid, GridToolbar} from '@mui/x-data-grid';

function Team(){

  const [users, setUsers] = useState([]);

  const columns = useMemo(()=>[
    {field:'id_user', headerName:'ID', width:60},
    {field:'name', headerName:'Name', flex: 1, cellClassName: "name-column--cell",},
    {field:'surname', headerName:'Surname', flex: 1},
    {field:'email', headerName:'Email', flex: 1},
    {field:'status', headerName:'Status', type: "number", flex: 1, headerAlign: "left", align: "left",},
    {field:'team_name', headerName:'Team Name', flex: 1}

  ], [])


useEffect(() => {
  fetch(url+'get_users.php')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setUsers(data)})
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
  <Typography
  variant='h4'
  component='h4'
  sx={{textAlign:'center', mt:3, mb:3}}
  >
  Manage Users
  </Typography>
  <DataGrid
  checkboxSelection
  columns={columns}
  rows={users}
  getRowId={row=>row.id_user}
  components={{ Toolbar: GridToolbar }}
  >
  </DataGrid>
  </Box>
)

}

export default Team;

