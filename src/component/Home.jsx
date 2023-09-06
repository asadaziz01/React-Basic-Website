import React from 'react';
import Common from './Common';
import Fast from '../images/fast.svg';

const Home = () =>{
    return(
        <>
            <Common name = 'Hi! Welcome to My React Website, My Name is &nbsp;&nbsp; ' imgsrc = {Fast} visit = '/service' btnName = 'Get Started' />
        </>
    )
}

export default Home;