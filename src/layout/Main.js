import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = ({handleDark,dark}) => {
    return (
        <div>
            <Header handleDark={handleDark} dark={dark}></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;