import React from "react";

export default function Hero(){
    return (
        <section className='container-fluid' id='supportHero'>
            <div className='p-3' id='supportWrapper'>
                <h4 className='mt-3' style={{fontWeight:'lighter'}}>Support Portal</h4>
                <a href='#' className='mt-3'>Track Tickets</a>
            </div>
            <div className='row px-5 mx-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-4' style={{fontWeight:'lighter'}}>Search for the answer or browse help for the topics to create the ticket</h1>
                    <input placeholder='how do i activate F&Os, why is my order getting rejected..' className='mt-1 mb-1'/><br/>
                    <a href="#" style={{lineHeight:'30px', fontSize: '14px'}}>Track account openings</a>&nbsp;&nbsp;&nbsp;
                    <a href="#" style={{lineHeight:'30px', fontSize: '14px'}}>Track segment activation</a>&nbsp;&nbsp;&nbsp;
                    <a href="#" style={{lineHeight:'30px', fontSize: '14px'}}>Intraday margins</a>&nbsp;&nbsp;&nbsp;
                    <a href="#" style={{lineHeight:'30px', fontSize: '14px'}}>Kite user manual</a>&nbsp;&nbsp;&nbsp;
                </div>
                <div className='col-6 p-5'>
                    <h1 className='fs-4' style={{fontWeight:'lighter'}}>Featured</h1>
                    <ol style={{lineHeight:'30px', fontSize: '14px'}}>
                        <li><a href="#">Current Takeovers and Delistings - January 2024</a></li>
                        <li><a href="#">Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>

            </div>
        </section>
    );
}