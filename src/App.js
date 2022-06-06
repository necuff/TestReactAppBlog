import React, {useEffect, useMemo, useState} from 'react'
import './styles/App.css';
import { BrowserRouter, useParams} from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
import Loader from './components/UI/Loader/Loader';

function App() {      
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  
  useEffect(() => {
    if(localStorage.getItem('auth')){
      setIsAuth(true);      
    }
    setIsLoading(false);
  }, [isAuth])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <Navbar />
        {
          isLoading ?
            <Loader />  
            :
            <AppRouter />   
        }
              
      </BrowserRouter>    
    </AuthContext.Provider>    
  )
}

export default App;
