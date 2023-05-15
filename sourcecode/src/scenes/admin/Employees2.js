import React, {useState, useEffect, useMemo} from 'react';
import url from '../../get_php_link';
import { Box, Typography, Button, IconButton } from "@mui/material";
import {DataGrid, GridToolbar} from '@mui/x-data-grid';
import Header from '../../components/Header';
import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

function Employees2() {
    const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [teams, setTeams] = useState([]);

  let opt= [];
  for(var i=0; i<teams.length; i++){
    var obj = {};
    obj['value']=teams[i]['id_teams'];
    obj['label']=teams[i]['team_name'];
    opt.push(obj);
  }

  const handleUpdate = (row) => { 
    console.log(row);         
    let fData = new FormData();
    fData.append('id_user', row.id_user)
    fData.append('name', row.name);
    fData.append('surname', row.surname);
    fData.append('status', row.status);
    fData.append('id_team', row.team_name);

    axios.post(url+'update_e.php', fData)
    .then(response=>alert(response.data))
    .catch(error=>alert(error));                  
    
}

  const columns = useMemo(()=>[
    {field:'id_user', headerName:'ID', width:60},
    {field:'name', headerName:'Name', flex: 1, cellClassName: "name-column--cell", editable:true},
    {field:'surname', headerName:'Surname', flex: 1, editable:true},
    {field:'email', headerName:'Email', flex: 1,},
    {field:'status', headerName:'Status', flex: 1, headerAlign: "left", align: "left", editable: true, type: 'singleSelect', 
    valueOptions: [1, 2, 3]},
    {field:'team_name', headerName:'Team Name', flex: 1, editable: true, type: 'singleSelect', 
    valueOptions: opt},
    {
        field: "action",
        headerName: "Action",
        sortable: false,
        flex: 1,
        renderCell: ({ row }) =>
          <Button onClick={() => navigate(`/admin/updateEmployee/${row.id_user}`)}>
            Action
          </Button>,
      },
      {
        field: "action",
        headerName: "Action",
        sortable: false,
        renderCell: ({ row }) =>[
        <IconButton  onClick={() => navigate(`/admin/updateEmployee/${row.id_user}`)} className="material-icons-outlined" type="button" sx={{p: 1}}>
        <EditOutlinedIcon />
        </IconButton>,
        <IconButton  onClick={() => handleUpdate(row)} className="material-icons-outlined" type="button" sx={{p: 1}}>
        <SaveOutlinedIcon />
        </IconButton>
          ]
      }

  ], [opt])

  useEffect(() => {
    fetch(url+'get_users.php')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setUsers(data)})
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    fetch(url + "get_teams.php")
      .then((response) => response.json())
      .then((data) => {
        setTeams(data);
      })
      .catch((error) => console.error(error));
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
              color: '#8f8f8f',
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
      <Header title="Employee" />
      </Typography>
      <Box
    height="75vh"
    sx = {{
      margin: '50px'
    }}>
      <DataGrid
      checkboxSelection
      columns={columns}
      rows={users}
      getRowId={row=>row.id_user}
      components={{ Toolbar: GridToolbar }}
    >
    </DataGrid>
    <Box
  m={1}
 //margin
  display="flex"
  justifyContent="flex-end"
  alignItems="flex-end"
>
      <Button variant="contained" component={Link} to="/admin/addEmployee">Add Employee</Button>
      </Box>
    </Box>
    </Box>
    
    
  </Box>
  )
}

export default Employees2;

