import React, { useState, useEffect } from 'react';
import url from '../../get_php_link';
import { Box, Typography, Button } from '@mui/material';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Adăugat importul pentru Axios

function Profile() {
  const [employee, setEmployee] = useState({picture: "profil.png"});
  const { idUser } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  console.log(selectedImage)


  useEffect(() => {
    fetch(url + 'get_profile.php?id_user=' + idUser)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEmployee(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleImageUpload = () => {
    if (!selectedImage) {
      alert('Selectați o imagine');
      return;
    }

    const formData = new FormData();
    formData.append('id_user', idUser);
    formData.append('picture_name', selectedImage.name); // Utilizăm doar numele imaginii

    axios
      .post(url + 'update_pictures.php', formData)
      .then((response) => 
        response.data
      )
      .catch((error) => alert(error));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };



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
    borderRadius: '50%',
    overflow: 'hidden',
    aspectRatio: '1/1', // Asigură că imaginea are o raport de aspect 1:1
  }}
>
  {/* Afișează imaginea selectată */}
  {selectedImage ? (
    <div
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: '50%',
      }}
    >
    
      <img
        src={URL.createObjectURL(selectedImage)}
        alt="Profile"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  ) : (employee.picture === null ? (<div
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: '50%',
      }}
    >
      <img
        src={require(`../../resources/profil.png`)}
        alt="Profile"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>):(
    <div
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: '50%',
      }}
    >
      <img
        src={require(`../../resources/${employee.picture}`)}
        alt="Profile"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  ))}
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
          <Typography style={{ fontSize: '30px', margin: '10px 0' }}>Email: {employee.email}</Typography>
          <Typography style={{ fontSize: '30px', margin: '10px 0' }}>Phone: {employee.phone_no}</Typography>
          <Typography style={{ fontSize: '30px', margin: '10px 0' }}>SSN: {employee.SSN}</Typography>
          <Typography style={{ fontSize: '30px', margin: '10px 0' }}>Address: {employee.address}</Typography>
          <Typography style={{ fontSize: '30px', margin: '10px 0' }}>
            Hourly Fee: {employee.hourly_fee}
          </Typography>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <Button variant="contained" color="primary" onClick={handleImageUpload}>
            Change pictures
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;
