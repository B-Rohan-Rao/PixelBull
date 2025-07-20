import React from "react";

export default function Team(){
    return (
        <div className='container mt-3 border-top'>
            <div className='row p-4 mt-5'>
                <h1 className='fs-4 text-center '>About Me
                </h1>
            </div>
            <div className='row p-4 text-muted ' style={{lineHeight: '1.8', fontSize: '15px'}}>
                <div className='col p-5 text-center'>
                    <img src='media/images/rohan.jpg' alt='Rohan' style={{ width: '65%', borderRadius: '50%'}} />
                    <h4 className='mt-3'>B. Rohan Rao</h4>
                    <h6>Mearn stack developer</h6>
                </div>
                <div className='col p-5 '>
                    <p>
                        B. Rohan Rao created PixelBull as his first major project to kick-start his journey as a MERN
                        stack developer. This clone of a leading stock trading platform was built to gain hands-on
                        experience, improve problem-solving skills, and understand real-world development logic.
                    </p>
                    <p>
                        Passionate about building scalable web applications, he is continuously learning and growing to
                        establish himself as a full-stack developer in the tech industry.
                    </p>
                    <p>
                        Playing basketball and video games is his zen.
                    </p>
                    <p>
                        Connect on &nbsp;
                        <a href='#' style={{textDecoration:"none"}}>Homepage</a> /&nbsp;
                        <a href='#' style={{textDecoration:"none"}}>TradingQnA</a> /&nbsp;
                        <a href='#' style={{textDecoration:"none"}}>Twitter</a>&nbsp;
                    </p>
                </div>
            </div>
        </div>
    );
}