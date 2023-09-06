import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';
import NavBar from './component/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

const App = () =>{

    const Index = () => {
        const navigate = useNavigate();
      
        useEffect(() => {
          setTimeout(() => {
            navigate('/', { replace: true });
          }, 2000);
        }, []);
      
        return <h1 className='text-center'>Redirecting...</h1>;
    }  

    return(
        <>
            <NavBar />
            <Routes>
                <Route exact path='/' Component={Home} />
                <Route exact path='/about' Component={About} />
                <Route exact path='/service' Component={Service} />
                <Route exact path='/contact' Component={Contact} />
                <Route path='*' Component={Index} />
            </Routes>
        </>
    )
}

export default App;