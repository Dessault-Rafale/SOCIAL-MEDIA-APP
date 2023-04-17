import React from 'react';
import LeftsideBar from '../../Components/LeftsideBar/LeftsideBar';
import Navbar from '../../Components/Navbar/Navbar';
import Middlebar from '../../Components/Middlebar/Middlebar';
import Rightsidebar from '../../Components/Rightsidebar/Rightsidebar';


export default function Homepage() {
    return (
        <>
            <Navbar />
            <LeftsideBar />
            <Middlebar />
            <Rightsidebar />
        </>
    )
}
