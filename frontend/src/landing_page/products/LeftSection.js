import React from "react";

export default function LeftSection({imageUrl, productName, productDescription, link1, link1text, learnMore, googlePlay, appStore}) {
    return (
        <div className='container p-5 '>
            <div className='row mt-5'>
                <div className='col-6 p-3'>
                    <img src={imageUrl} alt='image'/>
                </div>
                <div className='col-1'></div>
                <div className='col-5 p-4'>
                    <h1 className='p-4 fs-4'>{productName}</h1>
                    <p className='fs-6 px-4' style={{lineHeight: "32px"}}>{productDescription}</p>
                    <div className='mt-2 fs-7 px-4'>
                        {link1 && (
                            <a style={{textDecoration: "none"}} href={link1}>
                                {link1text}<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </a>
                        )}
                        {learnMore && (
                            <a style={{textDecoration: "none", marginLeft: '90px'}} href={learnMore}>Learn more <i
                                className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        )}
                    </div>
                    <div className='mt-4 px-4'>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg' alt='google play'/></a>
                        <a href={appStore} style={{ marginLeft:'20px'}}><img src='media/images/appstoreBadge.svg' alt='app store'/></a>
                    </div>
                </div>
            </div>
        </div>
    );
}