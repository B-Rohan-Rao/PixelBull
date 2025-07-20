import React from "react";

export default function Stats(){
    return(
        <div className='container p-5'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why 1.3+crore customer trust with ₹3.5 lakh crores worth opf equity investment</p>

                    <h2 className='fs-4'>No spams or gimmicks</h2>
                    <p className='text-muted'>No gimmicks, spams, "gamification", or annoying push notification. High quality app that you use at your own place, the way you like</p>

                    <h2 className='fs-4'>Our universe</h2>
                    <p className='text-muted'>Not just an app, an whole ecosystem. Our investment 30+ fintech startup offer you tailored services specific to your needs</p>

                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you de better with your money</p>
                </div>
                <div className='col-6 p-5'>
                    <img src="media/images/ecosystem.png" alt="ecoSystem" style={{width: "100%"}}/>
                    <div className='text-center'>
                        <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='' style={{textDecoration:"none"}}>Try Kite demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}