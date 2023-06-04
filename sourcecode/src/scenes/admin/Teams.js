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

function Teams({ history }) {
  const { idUser } = useParams();

  const [teams, setTeams] = useState([]);
  const [managers, setManagers] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  console.log(managers);

  let opt= [];
  for(var i=0; i<managers.length; i++){
    var obj = {};
    obj['value']=managers[i]['id_manager'];
    obj['label']=managers[i]['manager_name'];
    opt.push(obj);
  }

  console.log(opt);

  useEffect(() => {
    fetch(url+'get_managers.php')
      .then((response) => response.json())
      .then((data) => setManagers(data))
      .catch((error) => console.error(error));
  }, []);


  const handleUpdate = (row) => { 
    console.log(row);         
    let fData = new FormData();
    fData.append('id_teams', row.id_teams)
    fData.append('team_name', row.team_name);
    fData.append('id_manager', row.manager_name);
    console.log(row.id_manager)

    axios.post(url+'update_team.php', fData)
    .then(response=>response.data)
    .catch(error=>alert(error)); 
    
    if(loading === true){
      setLoading(false);
    } else{
      setLoading(true);
    }  
}

  const columns = useMemo(
    () => [      { field: "id_teams", headerName: "ID", width: 60 , hide: true},  
        { field: "team_name", headerName: "Name team", flex: 1 , editable: true},    
          {field:'manager_name', headerName:'Manager', flex: 1, editable: true, type: 'singleSelect', 
    valueOptions: opt},
          {
            field: "action",
            headerName: "Action",
            sortable: false,
            renderCell: ({ row }) =>[
            <IconButton  onClick={() => navigate(`/admin/updateTeam/${idUser}/${row.id_teams}`)} className="material-icons-outlined" type="button" sx={{p: 1}}>
            <EditOutlinedIcon />
            </IconButton>,
            <IconButton  onClick={() => handleUpdate(row)} className="material-icons-outlined" type="button" sx={{p: 1}}>
            <SaveOutlinedIcon />
            </IconButton>
              ]
          }    ],
   // eslint-disable-next-line react-hooks/exhaustive-deps
   [opt, loading]
  );

  useEffect(() => {
    fetch(url + "get_teams.php")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
          <Header title="Teams" />
        </Typography>
        <Box
  m={1}
 //margin
  display="flex"
  justifyContent="flex-end"
  alignItems="flex-end"
>
      <Button variant="contained" onClick={()=>{navigate(`/admin/addTeam/${idUser}`)}} >Add Team</Button>
      </Box>
        <Box height="75vh" sx={{ margin: "50px" }}>
          <DataGrid
            checkboxSelection
            columns={columns}
            rows={teams}
            getRowId={(row) => row.id_teams}
            components={{ Toolbar: GridToolbar }}
          />

        </Box>
        
      </Box>
    </Box>
    
  );
}

export default Teams;
