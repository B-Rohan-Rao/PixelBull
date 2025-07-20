import React from "react";
import { Link } from "react-router-dom";

export default function Hero(){
    return (
        <div className='container p-3 mb-5  border-bottom'>
            <div className='text-center mt-5 p-3 mb-5'>
                <h1 style={{color: "#3e3e3e"}} className='fs-2'>Investments</h1>
                <h4 className='mt-3 fs-5  text-muted'>Everything from equities and derivatives to mutual funds and fixed income</h4>
                <p className='mt-3 mb-2'>Check out our <Link to={"/product"} style={{textDecoration: "none"}}>technology offerings <i
                        className="fa fa-long-arrow-right" aria-hidden="true"></i></Link></p>
            </div>
        </div>
    );
}