
//Icons
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
//List
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';


const MenuItems = (
        <>
            {/* Dashboard Button to Katas*/}
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Katas" />
            </ListItemButton>

            {/* Dashboard Button to Users*/}
            <ListItemButton>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
            </ListItemButton>

            {/* Dashboard Button to Ranking*/}
            <ListItemButton>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary= "Ranking" />
            </ListItemButton>
        </>
    )


export default MenuItems
