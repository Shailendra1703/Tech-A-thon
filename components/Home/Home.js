import React from 'react';
import pic from './home.jpg'
import './home.scss'
const Home = () => {
    return (
        <div>
            <img src={pic}/>
            <div className='head'> 
            <h1>Welcome to Bug-Blogs</h1> 
            <p>What you desire is what you spill through hands </p> 
            </div>
        </div>
    );
}

export default Home;
