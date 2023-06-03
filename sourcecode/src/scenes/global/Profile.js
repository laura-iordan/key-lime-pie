import React, { useState, useEffect } from 'react';
import url from '../../get_php_link';
import { Box, Typography } from '@mui/material';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import profile from '../../resources/profil.png';

function Profile() {
  const [employee, setEmployee] = useState({});
  const { idUser } = useParams();
  console.log(idUser);

  useEffect(() => {
    fetch(url + 'get_employee.php?id_user=' + idUser)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmployee(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Box m="40px 0 0 0" display="flex" flexDirection="column" alignItems="center">
      <Typography>
        <Header title="Profile" />
      </Typography>
      <Box display="flex" width="100%" justifyContent="center" mt="40px">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40%',
            padding: '20px',
          }}
        >
          {/* Insert the profile picture here */}
          <img src={profile} alt="Profile" style={{ width: '100%', height: 'auto' }} />
        </Box>
        <Box
          className="profile-info"
          textAlign="left"
          ml="30px"
          sx={{ backgroundColor: '#F2F2F2', padding: '100px', borderRadius: '5px' }}
        >
          <Typography variant="h4" style={{ fontSize: '40px', marginBottom: '20px' }}>
            {employee.name} {employee.surname}
          </Typography>
          <Typography style={{ fontSize: '30px', margin: '10px 0' }}>
            Email: {employee.email}
          </Typography>
          <Typography style={{ fontSize: '30px', margin: '10px 0' }}>
            Phone: {employee.phone_no}
          </Typography>
          <Typography style={{ fontSize: '30px', margin: '10px 0' }}>
            SSN: {employee.SSN}
          </Typography>
          <Typography style={{ fontSize: '30px', margin: '10px 0' }}>
            Address: {employee.address}
          </Typography>
          <Typography style={{ fontSize: '30px', margin: '10px 0' }}>
            Hourly Fee: {employee.hourly_fee}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;