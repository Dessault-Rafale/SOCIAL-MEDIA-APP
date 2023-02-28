import React, { useState } from 'react'

export default function Feedsection({ datas }) {

    const [like, setlike] = useState(datas.text2)
    // const [comment, setcomment] = useState(datas.text3)
    // console.log(comment)
    // const [commented, setcommented] = useState(false)
    // console.log(commented)
    console.log(like)
    const [liked, setliked] = useState(false)
    console.log(liked)

    const likeHandler = () => {
        setlike(liked ? like - 1 : like + 1)
        setliked(!liked)
    }
        // const commentHandler = () => {
        //     setcomment( comment + 1)
            


        // }
        return (
            <div className='secondbar'>
                <br />
                {datas.img1}
                <h3 id="alexandra">{datas.name}</h3>
                <p id="minago">{datas.time}</p>
                <p id="lovetext">{datas.text1}</p>
                <div id="dots">
                    {datas.dots}
                </div>
                <img id="railway" src={datas.img2}></img>
                <div>
                    <img id="like" onClick={likeHandler} src={datas.img3}></img>
                    <img id="heart"  src="/Assets/love.png"></img>
                </div>

                <p id="people">{like} people like it</p>
                <p id="comments">comments</p>
            </div>
        )

    }

