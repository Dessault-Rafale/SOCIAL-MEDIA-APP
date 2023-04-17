import React from 'react'
import "./middlebar.css"
import Avatar from '@mui/material/Avatar';
import PermMediaOutlined from '@mui/icons-material/PermMediaOutlined';
import Label from '@mui/icons-material/Label';
import LocationOn from '@mui/icons-material/LocationOn';
import EmojiEmotions from '@mui/icons-material/EmojiEmotions';
import MoreVert from '@mui/icons-material/MoreVert';
import { wicket } from '../../M-Dummy'
import Feedsection from './Feedsection';

export default function Middlebar() {
    // const [like,setlike]=useState()
    return (
        <div>
            <div id='firstbar'>
                <br />
                <Avatar id="avatar3"
                    alt="Remy Sharp"
                    src="/Assets/Bill Gates.jpg"
                    sx={{ width: 62, height: 62 }}
                />

                <p id='text'>What's in your mind Safak?</p>
                <br />

                <hr id='break'></hr>
                <PermMediaOutlined className='photovideo' />
                <p id="phototext">Photo or Video</p>
                <div id="label">
                    <Label />
                </div>
                <p id="labeltext">Tag</p>
                <div id="location">
                    <LocationOn />
                </div>
                <p id="locationtext">Location</p>
                <div id="emoji">
                    <EmojiEmotions />
                </div>
                <p id="emojitext">Feelings</p>
                <div id="share">
                    <button id="button1">Share</button>
                </div>
            </div>



{wicket.map((data)=>

<Feedsection datas={data}/>

//     <div className='secondbar'>
//     <br />
//     {data.img1}
//     <h3 id="alexandra">{data.name}</h3>
//     <p id="minago">{data.time}</p>
//     <p id="lovetext">{data.text1}</p>
//     <div id="dots">
//     {data.dots}
//     </div>
//     <img id="railway" src={data.img2}></img>
//     <div>
//         <img  id="like" src={data.img3}></img>
//         <img id="heart" src={data.img4}></img>
//     </div> 
     
//     <p id="people">{data.text2} people like it</p>
//     <p id="comments">{data.text3}</p>
// </div>

)}
            






            {/* <div className='secondbar'>
                <br />
                <Avatar id="avatar4"
                    alt="Remy Sharp"
                    src="/Assets/Bill Gates.jpg"
                    sx={{ width: 40, height: 40 }}
                />
                <h3 id="alexandra">Alexandra</h3>
                <p id="minago">5 mins ago</p>
                <p id="lovetext">Love For All,Hatred For None.</p>
                <div id="dots">
                    <MoreVert />
                </div>
                <img id="railway" src="/Assets/Bill Gates.jpg"></img>
                <div>
                    <img  id="like" src="/Assets/like.png"></img>
                    <img id="heart" src="/Assets/love.png"></img>
                </div> 
                 
                <p id="people">32 people like it</p>
                <p id="comments">9 comments</p>
            </div> */}


            {/* <div className='secondbar'>
                <br />
                <Avatar id="avatar4"
                    alt="Remy Sharp"
                    src="/Assets/ironman.jpg"
                    sx={{ width: 40, height: 40 }}
                />
                <h3 id="alexandra">Rb Downey</h3>
                <p id="minago">10 mins ago</p>
                <p id="lovetext">Because, I Am The IRONMAN.</p>
                <div id="dots">
                    <MoreVert />
                </div>
                <img id="railway" src="/Assets/ironman.jpg"></img>
                <div>
                    <img  id="like" src="/Assets/like.png"></img>
                    <img id="heart" src="/Assets/love.png"></img>
                </div> 
                <p id="people">92 people like it</p>
                <p id="comments">8 comments</p>
            </div> */}

        </div>
    )
}
