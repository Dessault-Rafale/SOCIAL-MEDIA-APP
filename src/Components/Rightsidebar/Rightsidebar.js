import React from 'react'
import "./rightsidebar.css"
import { Avatar } from '@mui/material'
import Badge from '@mui/material/Badge';
import { world } from '../../R-Dummy'
import { styled } from '@mui/material/styles';
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));


export default function Rightsidebar() {
    return (
        <div>
            <div id="firstitem">
                <div>
                    <img id="giftbox" src="/Assets/giftbox1.png" />
                </div>
                <p id="righttext"><b id="head">Pola Foster </b> and <b id="head">3 other friends </b> have a birthday today.</p>
                <img id="rightimg" src="/Assets/ironman.jpg"></img>



                <p id='heading'> <b>Online Friends</b></p>

                <div>

                {world.map((data) =>
                    <>  
                    {data.img5}
                    <p id="online1"><b>{data.name1}</b></p>
                    <br />
                    </>
                   

                )}
                    

                    {/* <StyledBadge id="online" color="success" overlap="circular" badgeContent=" ">
                        <Avatar id="badge1"
                            alt="Remy Sharp"
                            src="/Assets/Bill Gates.jpg"
                            sx={{ width: 45, height: 45 }}
                        />
                    </StyledBadge>
                    <p id="online1"> <b>Bill Gates</b></p>
                    <br/>

                    <StyledBadge id="online" color="success" overlap="circular" badgeContent=" ">
                        <Avatar id="badge1"
                            alt="Remy Sharp"
                            src="/Assets/rock.jpg"
                            sx={{ width: 45, height: 45 }}
                        />
                    </StyledBadge>
                    <p id="online1"> <b>Dwayne Johnson</b></p>
                    <br/>

                    <StyledBadge id="online" color="success" overlap="circular" badgeContent=" ">
                        <Avatar id="badge1"
                            alt="Remy Sharp"
                            src="/Assets/johny.jpg"
                            sx={{ width: 45, height: 45 }}
                        />
                    </StyledBadge>
                    <p id="online1"> <b>Jack Sparrow</b></p>
                    <br/>

                    <StyledBadge id="online" color="success" overlap="circular" badgeContent=" ">
                        <Avatar id="badge1"
                            alt="Remy Sharp"
                            src="/Assets/Bill Gates.jpg"
                            sx={{ width: 45, height: 45 }}
                        />
                    </StyledBadge>
                    <p id="online1"> <b>Alexandra</b></p>
                    <br/>

                    <StyledBadge id="online" color="success" overlap="circular" badgeContent=" ">
                        <Avatar id="badge1"
                            alt="Remy Sharp"
                            src="/Assets/henry.jpg"
                            sx={{ width: 45, height: 45 }}
                        />
                    </StyledBadge>
                    <p id="online1"> <b>Henry Calvin</b></p>
                    <br/>

                    <StyledBadge id="online" color="success" overlap="circular" badgeContent=" ">
                        <Avatar id="badge1"
                            alt="Remy Sharp"
                            src="/Assets/wick.jpg"
                            sx={{ width: 45, height: 45 }}
                        />
                    </StyledBadge>
                    <p id="online1"> <b>John Wick</b></p>
                    <br/> */}
                </div>







            </div>
        </div>
    )
}
