import React, {useState, useEffect, useMemo} from 'react';
import url from '../../get_php_link';
import { Box, Typography, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import {DataGrid, GridToolbar} from '@mui/x-data-grid';
import Header from '../../components/Header';
import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function Employees2() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open,setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null); // 
  const [name,setName] = useState(null); // numele angajatului care va fi sters 

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
    fData.append('id_team', row.team_name);

    axios.post(url+'update_e.php', fData)
    .then(response=>response.data)
    .catch(error=>alert(error)); 
    
    if(loading === true){
      setLoading(false);
    } else{
      setLoading(true);
    }  
}

const handleClickOpen = (row) => {
  setOpen(true);
  setSelectedRow(row);
  console.log(row.id_user);
  setName(row.name + ' ' + row.surname);
};

const handleClose = () => {
  setOpen(false);
  setSelectedRow(null);
};

const handleDelete = () => {
  if (selectedRow) {
    console.log(selectedRow);
    let fData = new FormData();
    fData.append('id_user', selectedRow.id_user);

    axios
      .post(url + 'delete.php', fData)
      .then((response) => response.data)
      .catch((error) => alert(error));

    setLoading((prev) => !prev);
    handleClose();
  }
};

  const columns = useMemo(()=>[
    {field:'id_user', headerName:'ID', width:60, hide: true},
    {field:'name', headerName:'Name', flex: 1, cellClassName: "name-column--cell", editable:true},
    {field:'surname', headerName:'Surname', flex: 1, editable:true},
    {field:'email', headerName:'Email', flex: 1,},
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
        </IconButton>,
        <IconButton  onClick={() => handleClickOpen(row)} className="material-icons-outlined" type="button" sx={{p: 1}}>
        <DeleteOutlineOutlinedIcon />
        </IconButton>
        
          ]
      }
  ], [opt, loading])

  useEffect(() => {
    fetch(url+'get_users.php')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setUsers(data)})
      .catch(error => console.error(error));
  }, [loading]);

  useEffect(() => {
    fetch(url + "get_teams.php")
      .then((response) => response.json())
      .then((data) => {
        setTeams(data);
      })
      .catch((error) => console.error(error));
  }, [loading]);


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
      <Header title="Manage Employees" />
      </Typography>
      <Box
  m={1}
 //margin
  display="flex"
  justifyContent="flex-end"
  alignItems="flex-end"
>
      <Button variant="contained" component={Link} to="/admin/addEmployee">Add Employee</Button>
      </Box>
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

    </Box>

      <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="delete-confirmation-dialog"
          aria-describedby="cancel-or-proceed-deleting"
      > 
          <DialogTitle >{"Are you sure you want to delete the selected employee?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>If you confirm, employee {name} will be deleted.</DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleDelete} autoFocus>
              Confirm
            </Button>
          </DialogActions>
      </Dialog>

    </Box>
    
    
  </Box>
  )
}

export default Employees2;



