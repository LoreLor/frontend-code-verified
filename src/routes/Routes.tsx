import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import HomePage from '../pages/HomePage';
import KatasDetailPage from '../pages/KatasDetailPage';
import KatasPage from '../pages/KatasPage';
import LoginPage from '../pages/LoginPage';
import RegisterPages from '../pages/RegisterPages';
import UsersPage from '../pages/UsersPage';



const AppRoutes: any = ()=> {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/register' element={<RegisterPages/>}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/katas' element={<KatasPage/>}></Route>
            <Route path='/katas/:id' element={<KatasDetailPage/>}></Route>
            <Route path='/users' element={<UsersPage />}></Route>
            
            {/* Redirect when page not found */}
            <Route path='*' element={<Navigate to='/' replace/>}></Route>
        </Routes>
    )
}

export default AppRoutes;
