import React, { useState } from 'react'

// Theme personalization of MUI
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'

// css & Drawer
import CssBaseline from '@mui/material/CssBaseline'
import MuiDrawer from '@mui/material/Drawer'

// Nav Bar
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

// Material List
import List from '@mui/material/List'

// Material Grids && Boxs
import { Box, Grid, Divider, Container, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';

// Icons
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LogoutIcon from '@mui/icons-material/Logout';

// List for MenuItems
import MenuItems from './MenuItems'
//import NewEditor from '../editor/NewEditor'
import EditorTipTap from '../editor/EditorTipTap'
//import FileUploader from '../uploaders/FileUploader'
//import FileUploadPond from '../uploaders/FileUploadPond'



// width for drawer menu
const drawerWidth: any = 240;

// props para AppBar para personalizar el menu
interface AppBarProps extends MuiAppBarProps {
    open?: Boolean
}

// componente estilado
const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' 
    })<AppBarProps>(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            }),
        })
    })
)


// Drawer Menu
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen
                }),
                width: theme.spacing(7),
                // breakpoints para @Queries - distintos tamaños de pantalla
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9)
                }
            })
        }
    })
)

// Define Theme
const myTheme = createTheme();


//TODO navigations
const Dashboard = () => {
    const [open, setOpen] = useState(true)


    // Show/Hidde Draw   controlador para mostrar u ocultar menu
    const handleTooggle = () => {
        setOpen(!open)
    }


    return (
        <ThemeProvider theme={myTheme}>
            <Box sx={{display:'flex'}}>
                <CssBaseline />

                {/* AppBar */}
                <AppBar position='absolute' open={open}>
                    <Toolbar sx={{ pr:'24px'}}>

                        {/* icono para mostrar el menu */}
                        <IconButton 
                            edge='start'
                            color='inherit'
                            aria-label='open-drawer'
                            onClick={handleTooggle}
                            sx={{
                                marginRight:'36px', 
                                ...(open && {display:'none'})
                            }}
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* Title */}
                        <Typography 
                            component={'h1'} 
                            variant={'h6'}
                            color='inherit'
                            noWrap
                            sx={{flexGrow: 1}}
                        >
                            Code Verification Katas
                        </Typography>

                        {/* Notifications Icon */}
                        <IconButton>
                            <Badge badgeContent={10} color='secondary'>
                                <NotificationsIcon sx={{color:'white'}} />
                            </Badge>
                        </IconButton>

                        {/* Logout Icon */}
                        <IconButton color='inherit'>
                                <LogoutIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant='permanent' open={open}>
                    <Toolbar
                        sx={{
                            display:'flex', 
                            alignItems:'center', 
                            justifyContent:'flex-end', 
                            px:1
                        }}
                    >
                         {/* Hide menu icon */}
                        <IconButton color='inherit' onClick={handleTooggle}>
                            <ChevronLeftIcon  />
                        </IconButton>
                    </Toolbar>
                    <Divider />

                    {/* List of Menu */}
                    <List component={'nav'}>
                        <MenuItems />
                    </List>
                </Drawer>

                {/* Dashboard Content */}
                <Box
                    component={'main'}
                    sx={{ 
                        backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100]: theme.palette.grey[900], 
                        flexGrow:1, 
                        height:'100vh', 
                        overflow:'auto'
                    }}
                >

                    {/* Toolbar */}
                    <Toolbar />

                    {/* TODO: Container  */}
                    <Container maxWidth='lg' sx={{mt:4, mg:4}}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Paper sx={{
                                p:2, 
                                display:'flex', 
                                flexDirection:'column'
                                }}
                            >
                                 <EditorTipTap />
                                 {/* <NewEditor /> */}
                                {/* <FileUploader /> */}
                                {/* <FileUploadPond /> */}
                            </Paper>
                        </Grid>       
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default Dashboard
