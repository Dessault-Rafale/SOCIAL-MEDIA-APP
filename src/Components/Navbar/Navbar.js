import React from 'react'
import "./navbar.css"
import { Avatar } from '@mui/material'
import { Notifications } from '@mui/icons-material'
import Badge from '@mui/material/Badge';
import Person from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
// import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <div id="Row">
                <h2>Mai_Tweet</h2>
                <div id="input"></div>
                <div id="searchicon"><i class="fa fa-search"></i></div>
                <div id="inputnotes">Search for friend,post or video</div>
                <div id="names">Profile Home</div>

                <Avatar id="image"
                    alt="Remy Sharp"
                    src="/Assets/Bill Gates.jpg"
                    sx={{ width: 28, height: 28 }}
                />
                <Badge badgeContent={1} className='icon1' color="error">
                    <Notifications/>
                </Badge>
                <Badge badgeContent={1} className='icon2' color="error">
                    <Person/>
                </Badge>
                <Badge badgeContent={2} className='icon3' color="error">
                    <MessageIcon/>
                </Badge>
                
                
            </div>
        </div >
    )
}
