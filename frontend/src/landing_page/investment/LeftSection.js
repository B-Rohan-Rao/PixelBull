import React from "react";

export default function LeftSection({imageUrl, productName, productDescription, link1, link1text, link2, link2text, link3, link3text, link4, link4text, link5, link5text, link6, link6text }) {
    return (
        <div className='container p-5 '>
            <div className='row mt-2'>
                <div className='col-6 p-3'>
                    <img src={imageUrl} alt='image' style={{width:"80%"}}/>
                </div>

                <div className='col-6 p-4'>
                    <h1 className='p-4 fs-4'>{productName}</h1>
                    <p className='fs-6 px-4' style={{lineHeight: "32px"}}>{productDescription}</p>
                    <div className='row'>
                        <div className='col-6 mt-2 fs-7 px-5'>
                            {link1 && (
                                <a style={{textDecoration: "none"}} className='text-muted' href={link1}>
                                    {link1text}<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                </a>
                            )}<br/>
                            {link2 && (
                                <a style={{textDecoration: "none"}} className='text-muted' href={link2}>{link2text} <i
                                    className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                            )}<br/>
                            {link3 && (
                                <a style={{textDecoration: "none"}} className='text-muted' href={link3}>{link3text} <i
                                    className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                            )}
                        </div>
                        <div className='col-6 mt-2 fs-7'>
                            {link4 && (
                                <a style={{textDecoration: "none"}} className='text-muted' href={link4}>{link4text} <i
                                    className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                            )}<br/>
                            {link5 && (
                                <a style={{textDecoration: "none"}} className='text-muted' href={link5}>{link5text} <i
                                    className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                            )}<br/>
                            {link6 && (
                                <a style={{textDecoration: "none"}} className='text-muted' href={link6}>{link6text} <i
                                    className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                            )}<br/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}