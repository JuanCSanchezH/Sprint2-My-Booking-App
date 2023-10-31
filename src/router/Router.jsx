import React, { createContext, useReducer } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import App from '../App'
import userLoggedReducer, { userLoggedInitial } from '../reducers/userLoggedReducer';
import PrivatedRoutes from './privatedRoutes';
// import Register from '../pages/register/Register';
import PublicRoutes from './publicRoutes';

export const AppContext = createContext([]);

const Router = () => {

    const [userLogged, userLoggedDispatch] = useReducer(userLoggedReducer, userLoggedInitial) //También se retorna función que se ejecuta cuando se actulice el estado useLogged (por cada estado, se crea un archivo)

    const globalStates = {
        userLogged: {userLogged, userLoggedDispatch}
    };

    return (
        <AppContext.Provider value={globalStates}>
            <BrowserRouter>
                <Routes>
                    <Route path='/'>
                        <Route element={<PrivatedRoutes isAuthenticate={userLogged.isAuthenticated}/>}>
                            <Route index element={ <App/>}/>
                            <Route path='app' element={ <App/>}/>
                        </Route>
                        <Route element={<PublicRoutes isAuthenticate={userLogged.isAuthenticated}/>}>
                            <Route path='login' element={ <Login/>}/>
                            <Route path='register' element={ <Register />}/>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default Router