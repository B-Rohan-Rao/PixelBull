import React from "react";

export default function Universe(){
    return (
        <div className='container text-center p-5'>
            <div className='row p-5'>
                <h1 className='fs-4 text-muted'>The PixelBull Universe</h1>
                <p className='text-muted mt-4'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 mt-5 p-5'>
                    <img src='media/images/Untitled design (1).png' alt='smallcaseLogo.png'  style={{width:"150px"}}/>
                    <p className='text-muted px-4 mt-3' style={{fontSize: "13px"}}>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4 p-3 mt-5 p-5'>
                    <img src='media/images/sensibullLogo.svg' alt='smallcaseLogo.png' style={{width:"150px"}}/>
                    <p className='text-muted px-4 mt-3' style={{fontSize: "13px"}}>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4 p-3 mt-5 p-5'>
                    <img src='media/images/tijori.svg' alt='streakLogo.png' style={{width:"120px"}}/>
                    <p className='text-muted px-4 mt-2' style={{fontSize: "13px"}}>Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.</p>
                </div>
                <div className='col-4 p-3 px-5'>
                    <img src='media/images/streakLogo-1.png' alt='smallcaseLogo.png' style={{width:"150px"}}/>
                    <p className='text-muted px-4 mt-2' style={{fontSize: "13px"}}>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4 p-3 px-5'>
                    <img src='media/images/smallcaseLogo.png' alt='streakLogo.png' style={{width:"150px"}}/>
                    <p className='text-muted px-4 mt-3' style={{fontSize: "13px"}}>Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.</p>
                </div>
                <div className='col-4 p-3 px-5'>
                    <img src='media/images/dittoLogo.png' alt='smallcaseLogo.png' style={{width:"120px"}}/>
                    <p className='text-muted px-4 mt-2' style={{fontSize: "13px"}}>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.</p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mt-5' style={{width: "20%", margin: "0 auto"}}>Sign up for
                    free
                </button>
            </div>
        </div>
    );
}