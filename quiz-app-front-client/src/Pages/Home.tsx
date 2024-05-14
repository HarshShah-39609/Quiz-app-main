import * as React from 'react';
import AppBarWithMenu from '../Components/Appbar';
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { UpcomingQuiz,CompletedQuiz } from '../Components/Mainpagequizdetails';

export default function Home() {

  const defaultImagePath = process.env.REACT_APP_DEFAULT_APP_IMAGE;

  return (
    <div style={{ background: `url(${defaultImagePath})` ,backgroundSize: 'cover', height: '100vh' , width:'100vw' }}>
      <AppBarWithMenu />
      <Grid container>
        <Grid item xs={12} ml={4}>
          <Card sx={{ display:'flex', width:'75%' , borderRadius: '20px', background: 'rgba(255, 255, 255 , 0.8)', boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.5)', marginTop: '100px' , padding:'20px' }}>
            <CardContent>
              <Typography variant='h5'>Ongoing Quiz</Typography>
              <UpcomingQuiz/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} ml={4}>
          <Card sx={{ display:'flex', width:'75%' ,borderRadius: '20px', background: 'rgba(255, 255, 255 , 0.8)', boxShadow: '2px 2px 5px 2px rgba(0, 0, 0, 0.5)', marginTop:'40px' , padding:'20px' }}>
            <CardContent>
              <Typography variant='h5'>Completed Quiz</Typography>
              <CompletedQuiz/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}