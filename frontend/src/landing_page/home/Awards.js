import React from 'react';

export default function Awards(){
    return(
        <div className='container p-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg'/>
                </div>
                <div className='col-6 mt-3 p-5'>
                    <h1>Largest stock broker of India</h1>
                    <p className='mb-5'>2 million+ clients contribute to over 15% of all the retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li><p>Future and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Gov. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' alt='presslogo' style={{width: '90%'}}/>
                </div>
            </div>
        </div>
    );
}