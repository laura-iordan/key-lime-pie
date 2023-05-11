import React, { useState, useEffect, useMemo } from "react";
import url from "../../get_php_link";
import { Box, Typography, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Header from "../../components/Header";
import {Link } from "react-router-dom";

function Teams({ history }) {
  const [teams, setTeams] = useState([]);

  const columns = useMemo(
    () => [      { field: "id_teams", headerName: "ID", width: 60 },  
        { field: "team_name", headerName: "Name team", flex: 1 },    
          { field: "manager_name", headerName: "Manager", flex: 1 },    ],
    []
  );

  useEffect(() => {
    fetch(url + "get_teams.php")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
        <Box height="75vh" sx={{ margin: "50px" }}>
          <DataGrid
            checkboxSelection
            columns={columns}
            rows={teams}
            getRowId={(row) => row.id_teams}
            components={{ Toolbar: GridToolbar }}
          />
          <Box
  m={1}
 //margin
  display="flex"
  justifyContent="flex-end"
  alignItems="flex-end"
>
      <Button variant="contained" component={Link} to="/admin/addTeam">Add Team</Button>
      </Box>
        </Box>
        
      </Box>
    </Box>
    
  );
}

export default Teams;
