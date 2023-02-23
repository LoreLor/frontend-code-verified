
//Icons
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
//List





import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';


    


const MenuItems = ()=>{
    const navigate = useNavigate()

    const handleKatas = () => {
        navigate('/katas')
    }

    const handleUsers = () => {
        navigate('/users')
    }




    return (
        <>
            {/* Dashboard Button to Katas*/}
            <ListItemButton onClick={handleKatas}>
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Katas" />
            </ListItemButton>

            {/* Dashboard Button to Users*/}
            <ListItemButton onClick={handleUsers}>
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
}


export default MenuItems
