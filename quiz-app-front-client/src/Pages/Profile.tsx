import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AppBarWithMenu from '../Components/Appbar';
import TextField from '@mui/material/TextField';
import { Buffer } from 'buffer';
import { AddPhotoAlternateRounded } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

interface UserData {
  name: string;
  email: string;
  phone: string;
  password: string;
  user_photo: string;
}

export default function Profile() {
 // Background Image
  const defaultImagePath = process.env.REACT_APP_DEFAULT_APP_IMAGE;
  
  // For New File
  const [file, setFile] = useState<File | null>(null);
  const Home = useNavigate();
  
  // FormData
  const [formData, setFormData] = useState<UserData>({
    name: '',
    email: '',
    phone: '',
    password: '',
    user_photo: '',
  });

  // Fetching Id from Session Storage
  const idString = sessionStorage.getItem('User');
  if (idString !== null) {
    var id = parseInt(idString);
  }
  

  // For Fetching Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_Fast_API}/profile?id=${id}`);

        if (response.status === 200) {
          const jsonData = response.data;
          setFormData({
            name: jsonData.name,
            email: jsonData.email,
            phone: jsonData.phone,
            password: jsonData.password,
            user_photo: jsonData.user_photo,
          });
        } else {
          console.log('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Convert Buffer To Image
  const userPhotoBase64 = `data:image/jpeg;base64,${Buffer.from(formData.user_photo).toString('base64')}`;

  // On Update data
  const handleUpdate = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('password', formData.password);

      // Append the profile picture file if it exists
      if (file) {
        formDataToSend.append('user_photo', file);
      }
  
      // Make a PUT request to update the user profile data
      const response = await axios.put(
        `${process.env.REACT_APP_Fast_API}/update-profile/${id}`,
        formDataToSend, // Send the FormData object containing user data
      );
  
      if (response.status === 200) {
        // Handle success response
        window.alert('Profile updated successfully');
        window.location.reload();
      } else {
        // Handle other status codes if needed
        console.log('Error updating profile:', response.statusText);
      }
    } catch (error) {
      // Handle error
      console.error('Error updating profile:', error);
    }
  };

  // On Cancel Changes
  const handlecancel = () => {
    window.location.reload();
  };

  // If Any Field Is Changing
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // If New File Is Going to Select
  const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      const selectedFile = fileList[0];
      setFile(selectedFile); // Set the selected file to the state
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.result !== null) {
          setFormData({
            ...formData,
            user_photo: reader.result as string,
          });
        }
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <div style={{ background: `url(${defaultImagePath})`, backgroundSize: 'cover', height: '100vh' }}>
      <AppBarWithMenu />
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card sx={{ display:'flex', alignContent:'center', borderRadius: '20px', background: 'rgba(255, 255, 255 , 0.9)', boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.5)', margin: '150px 0px' , padding:'20px' }}>
            <CardContent>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={4}>
                  <Avatar alt="User Photo" src={userPhotoBase64} sx={{ width: 150, height: 150, margin: 'auto' }} />
                  {/* Input field for updating profile picture */}
                  {/* <input type="file" accept="image/*" onChange={handleProfilePictureChange} /> */}
                  <Box display="flex"justifyContent={'center'} mt={1}>
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="media-upload"
                type="file"
                onChange={handleProfilePictureChange}
              />
              <label htmlFor="media-upload">
                <IconButton component="span">
                  <AddPhotoAlternateRounded />
                </IconButton>
              </label>
              {file && (
                <div>
                  <img
                    alt="Selected Image Preview"
                    src={URL.createObjectURL(file)}
                    style={{ width: 100, height: 100 }}
                  />
                </div>
              )}
            </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                  <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                  />
                  <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{marginTop:'20px'}}
                    fullWidth
                  />
                  <TextField
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{marginTop:'20px'}}
                    fullWidth
                  />
                  <TextField
                    type='password'
                    disabled
                    label="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    style={{marginTop:'20px'}}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button onClick={handleUpdate} variant="contained" color="primary" style={{ marginRight: '10px' }}>
                    Update
                  </Button>
                  <Button onClick={handlecancel} variant="contained" color="secondary">
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
