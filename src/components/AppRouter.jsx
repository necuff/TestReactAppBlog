import React, { useContext } from 'react';
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import { Navigate, Route, Routes } from 'react-router';
import PostIdPage from '../pages/PostIdPage';
import { publicRoutes, privateRoutes } from '../router/routes';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)        

    return (    
        isAuth 
            ?
            <Routes>
                {privateRoutes.map(route => 
                    <Route 
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                        key={route.path}
                    />
                )}                
            </Routes>
            :
            <Routes>                
                {publicRoutes.map(route => 
                    <Route 
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
            </Routes>
        
    );
};

export default AppRouter;