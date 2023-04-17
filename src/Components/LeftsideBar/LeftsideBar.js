import React from 'react'
import "./leftsideBar.css"
import { RssFeed, Chat, PlayCircle, Group, Bookmark, QuestionAnswer, HelpOutline, Work, WorkOutline, Event, School } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import { feed } from '../../L-Dummy1'
import { flygon } from '../../L-Dummy2'






export default function LeftsideBar() {


    console.log(feed);
    return (
        <div>
            <div className='options'>
                {feed.map((data) =>
                    <>  
                        <div className='A'>{data.icons}</div> <p className='a'>{data.name}</p>
                        
                    </>

                )}
                {/* <div className='A'><RssFeed /></div> <p className='a'>Feed</p>
                <div className='B'><Chat /></div> <p className='b'>Chats</p>
                <div className='C'><PlayCircle /> </div><p className='c'>Videos</p>
                <div className='D'><Group /></div> <p className='d'>Groups</p>
                <div className='E'><Bookmark /> </div><p className='e'>Bookmarks </p>
                <div className='F'><HelpOutline /></div><p className='f'>Questions</p>
                <div className='G'><WorkOutline /></div> <p className='g'>Jobs</p>
                <div className='H'><Event /></div> <p className='h'>Events</p>
                <div className='I'><School /></div> <p className='i'>Courses</p> */}
                <button className='button1'>Show More</button> <br /><br /><br />
                <hr className='underline'></hr>

                {flygon.map((data) =>
                    <>  
                    {data.img}
                    <p className='name1'>{data.names}</p>
                    </>

                )}
                 {/* <Avatar id="image2"
                    alt="Remy Sharp"
                    src="/Assets/rock.jpg"
                    sx={{ width: 28, height: 28 }}
                />
                <p className='name1'> Dwayne Johnson</p>

                <Avatar id="image2"
                    alt="Remy Sharp"
                    src="/Assets/wick.jpg"
                    sx={{ width: 28, height: 28 }}
                />
                <p className='name1'>John Wick</p>

                <Avatar id="image2"
                    alt="Remy Sharp"
                    src="/Assets/Bill Gates.jpg"
                    sx={{ width: 28, height: 28 }}
                />
                <p className='name1'>Bill Gates</p>
                <Avatar id="image2"
                    alt="Remy Sharp"
                    src="/Assets/henry.jpg"
                    sx={{ width: 28, height: 28 }}
                />
                <p className='name1'>Henry Calvin</p>
                <Avatar id="image2"
                    alt="Remy Sharp"
                    src="/Assets/johny.jpg"
                    sx={{ width: 28, height: 28 }}
                />
                <p className='name1'>Jack Sparrow</p>
                <Avatar id="image2"
                    alt="Remy Sharp"
                    src="/Assets/Bill Gates.jpg"
                    sx={{ width: 28, height: 28 }}
                />
                <p className='name1'>Henry Calvin</p>
                <Avatar id="image2"
                    alt="Remy Sharp"
                    src="/Assets/Bill Gates.jpg"
                    sx={{ width: 28, height: 28 }}
                />
                <p className='name1'>John Wick</p>
 */}


            </div>
        </div>
    )
}
