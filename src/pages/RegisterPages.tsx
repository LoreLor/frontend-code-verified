import { Avatar, Box, Container, createTheme, CssBaseline, Grid, ThemeProvider, Typography } from '@mui/material'
import RegisterForm from '../components/forms/RegisterForm'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';




const theme = createTheme();


const RegisterPages = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
              Register
          </Typography>
          <Box sx={{ mt: 3 }} >
              <Grid item xs={12} sm={6}>
                  <RegisterForm />
              </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default RegisterPages
