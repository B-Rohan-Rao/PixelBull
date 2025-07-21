import React from "react";

export default function Hero(){
    return (
        <div className='container p-5 border-bottom'>
            <div className='row text-center'>
                <h1 className='p-2 mt-3 fs-3' style={{color: "#3e3d3d"}}>Charges</h1>
                <p className='mb-5' style={{color: 'rgba(87,87,87,0.56)', fontSize: '20px'}}>List of all charges and taxes</p>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/pricing0.svg' alt='pricing0.svg' style={{width:"70%", marginBottom:"15px"}}/>
                    <h1 className='fs-4 mb-2' style={{color:"#3e3d3d"}}>Free equity delivery</h1>
                    <p style={{fontSize:"15px", lineHeight:"25px", marginTop:"20px", padding:"10px", color:"#3e3d3d"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/other-trades.svg' alt='pricing0.svg' style={{width:"70%", marginBottom:"15px"}}/>
                    <h1 className='fs-4 mb-2' style={{color:"#3e3d3d"}}>Intraday and F&O trades</h1>
                    <p style={{fontSize:"15px", lineHeight:"25px", marginTop:"20px", padding:"10px", color:"#3e3d3d"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/pricing0.svg' alt='pricing0.svg' style={{width:"70%", marginBottom:"15px"}}/>
                    <h1 className='fs-4 mb-2' style={{color:"#3e3d3d"}}>Free direct MF</h1>
                    <p style={{fontSize:"15px", lineHeight:"25px", marginTop:"20px", padding:"10px", color:"#3e3d3d"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>

                </div>
            </div>
        </div>
    );
}