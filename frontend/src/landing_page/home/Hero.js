import React from "react";

export default function Hero(){
    return(
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='homeHero' className='mb-1 p-5' />
                <h1 className='text-muted fs-4'>Invest in everything</h1>
                <p className='text-muted mb-4'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width: "18%", margin: "0 auto"}}>Sign Up</button>
            </div>
        </div>
    );
}