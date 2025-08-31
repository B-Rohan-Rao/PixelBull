import React from "react";

export default function CreateTicket(){
    return (
        <div className='container'>
            <div className='row p-5 mt-5 mb-5'>
                <h1 className='fs-2 text-center'>
                    To create tickets select relevant topics
                </h1>
                <div className='col-4 p-5 mt-5 mb-5'>
                    <h4 className='fs-6 p-2 mb-5 text-muted'><i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h4>
                    <p><a href='#' style={{textDecoration: "none", fontSize: "14px"}}>Online account opening</a><br/></p>
                    <p><a href='#' style={{textDecoration: "none", fontSize: "14px"}}>Offline account opening</a><br/></p>
                    <p><a href='#' style={{textDecoration: "none", fontSize: "14px"}}>Company Partnership and HUF account opening</a><br/></p>
                    <p><a href='#' style={{textDecoration: "none", fontSize: "14px"}}>NRI account opening</a><br/></p>
                    <p><a href='#' style={{textDecoration: "none", fontSize: "14px"}}>Charges at PixelBull</a><br/></p>
                    <p><a href='#' style={{textDecoration: "none", fontSize: "14px"}}>PixelBull IDFS first bank 3-in-1 Account</a><br/></p>
                    <p><a href='#' style={{textDecoration: "none", fontSize: "14px"}}>Get Started</a><br/></p>
                </div>
                <div className='col-4 p-5 mt-5 mb-5'>
                    <h4 className='fs-6 p-2 mb-5 text-muted'><i className="fa fa-user" aria-hidden="true"></i> Your PixelBull account</h4>
                    <p><a href='#' style={{textDecoration: "none", fontSize: "14px"}}>Login credentials</a><br/></p>
                    <p><a href='#' style={{textDecoration: "none", fontSize: "14px"}}>Account modification and segment addition</a><br/></p>
                    <p><a href='#' style={{textDecoration: "none", fontSize: "14px"}}>DP IP and bank details</a><br/></p>
                    <p><a href='#' style={{textDecoration: "none", fontSize: "14px"}}>Your profile</a><br/></p>
                    <p><a href='#' style={{textDecoration: "none", fontSize: "14px"}}>Transfer and conversion shares</a><br/></p>
                </div>
                <div className='col-4 p-5 mt-5 mb-5'>
                    <h4 className='fs-6 p-2 mb-5 text-muted'><i className="fa fa-bar-chart" aria-hidden="true"></i> Your PixelBull account</h4>
                    <p><a href='#' style={{textDecoration: "none", fontSize: "14px"}}>Margin/Leverage, Product and order types</a><br/></p>
                    <p><a href='#' style={{textDecoration: "none", fontSize: "14px"}}>Kite Web and Mobile</a><br/></p>
                    <p><a href='#' style={{textDecoration: "none", fontSize: "14px"}}>Trading FAQs</a><br/></p>
                    <p><a href='#' style={{textDecoration: "none", fontSize: "14px"}}>Corporate actions</a><br/></p>
                    <p><a href='#' style={{textDecoration: "none", fontSize: "14px"}}>Sentinel</a><br/></p>
                    <p><a href='#' style={{textDecoration: "none", fontSize: "14px"}}>Kite API</a><br/></p>
                    <p><a href='#' style={{textDecoration: "none", fontSize: "14px"}}>Pi and other platforms</a><br/></p>
                    <p><a href='#' style={{textDecoration: "none", fontSize: "14px"}}>Stockreports+</a><br/></p>
                    <p><a href='#' style={{textDecoration: "none", fontSize: "14px"}}>GTT</a><br/></p>
                </div>
            </div>
        </div>
    );
}