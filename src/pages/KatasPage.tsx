import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSessionJWT } from '../hooks/useSessionJWT';
import { getKatas } from '../services/katasServices';
import { Kata } from '../utils/types/Kata.types';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const KatasPage = () => {
  const [katas, setKatas] = useState([]);
  const [, setTotalPages] = useState(1);
  const [, setCurrentPage] = useState(1);


  const theme = createTheme();


  //para verificar que el usuario esta autenticado
  let token = useSessionJWT('sessionJWT');
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate('/login')
    } else {
      getKatas(token).then((response: AxiosResponse) => {
        if (response.status === 200) {
          let { katas, totalPages, currentPage } = response.data;
          setKatas(katas);
          setTotalPages(totalPages);
          setCurrentPage(currentPage);
          console.table(response.data);
        } else {
          throw new Error(`Error obtaining katas: ${response.data}`)
        }
      }).catch((error) => console.error(`[Get All Katas Error] ${error}`))

    }
  }, [navigate, token])


  const handleClick = (id: number) => {
    navigate(`/katas/${id}`)
  }

  const handleHome = () => {
    navigate('/')
  }



  return (

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar onClick={handleHome} >
          <HomeIcon sx={{ ml: 3, cursor: 'pointer', ":hover": { color: '#bf00ff' }, fontSize: '45px' }} />
        </Toolbar>
      </AppBar>

      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              KATAS
            </Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="contained">Secondary action</Button>
            </Stack>
          </Container>
        </Box>

        <Container sx={{ py: 6 }} maxWidth="md" >
          {/* End hero unit */}
          <Grid container spacing={4}>
            {katas.length > 0 ?
              <>
                {katas.map((kata: Kata) => (
                  <Grid item key={kata._id} xs={12} sm={6} md={4}>
                    <Card sx={{ display: 'flex', flexDirection: 'column' }}>
                      <CardMedia
                        component="img"
                        sx={{
                          // 16:9
                          pt: '10%',
                        }}
                        image="https://source.unsplash.com/random"
                        alt="random" />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <h3 onClick={() => handleClick(kata._id)} style={{ display: 'inline', cursor: 'pointer' }}>Name: {kata.name}</h3>
                        <h4>Description: {kata.description}</h4>
                        <h5>Creator: {kata.creator}</h5>
                        <p>Rating: {kata.stars}</p>
                      </CardContent>
                    </Card>
                  </Grid>)
                )}
              </>
              :
              <Grid>
                <h5>
                  No katas found
                </h5>
              </Grid>
            }
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  )
}

export default KatasPage
