import React from "react";

export default function Pricing(){
    return(
        <div className='container mb-5 p-5'>
            <div className='row'>
                <div className='col-4 mx-5'>
                    <h1 className='fs-2'>Unbeatable pricing</h1>
                    <p>We pioneer the concept of discount broking and price transparency in India</p>
                    <a href='' className='mb-5' style={{textDecoration:"none"}}>See pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-1'></div>
                <div className='col-5'>
                    <div className='row text-center'>
                        <div className='col p-2 border'>
                            <h1 className='mb-4 mt-2'>₹0</h1>
                            <p >Free equity delivery and <br/>direct mutual funds</p>
                        </div>
                        <div className='col p-2 border'>
                            <h1 className='mb-3 mt-2' >₹20</h1>
                            <p>Intradays and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}