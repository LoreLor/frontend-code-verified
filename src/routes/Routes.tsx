import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import KatasDetailPage from '../pages/KatasDetailPage';
import KatasPage from '../pages/KatasPage';
import LoginPage from '../pages/LoginPage';
import RegisterPages from '../pages/RegisterPages';



const AppRoutes: any = ()=> {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/register' element={<RegisterPages/>}></Route>
            <Route path='/katas' element={<KatasPage/>}></Route>
            <Route path='/katas/:id' element={<KatasDetailPage/>}></Route>
            
            {/* Redirect when page not found */}
            <Route path='*' element={<Navigate to='/' replace/>}></Route>
        </Routes>
    )
}

export default AppRoutes;
