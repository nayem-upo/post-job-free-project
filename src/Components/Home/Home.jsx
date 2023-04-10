import React from 'react';
import Home1stSec from '../Home1stSec/Home1stSec';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
            <Home1stSec></Home1stSec>
            <Category></Category>
            <Featured></Featured>
        </div>
    );
};

export default Home;