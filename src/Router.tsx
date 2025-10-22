import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
const HomePage = React.lazy(() => import('./pages/Home'));
const WelcomePage = React.lazy(() => import('./pages/Welcome'));

const Router = () => {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<WelcomePage />}></Route>
            <Route path='/dashboard' element={<HomePage />}></Route>
        </Routes>
    )
}

export default Router