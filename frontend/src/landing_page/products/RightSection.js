import React from "react";

export default function RightSection({imageUrl, productName, productDescription, link1, link1text}){
    return (
        <div className='container p-5'>
            <div className='row mt-5'>
                <div className='col-5 p-4'>
                    <h1 className='p-4 fs-4'>{productName}</h1>
                    <p className='fs-6 px-4' style={{lineHeight: "32px"}}>{productDescription}</p>
                    <div className='mt-2 fs-7 px-4'>
                        {link1 && (
                            <a style={{textDecoration: "none"}} href={link1}>
                                {link1text}<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </a>
                        )}
                    </div>
                </div>
                <div className='col-1'></div>
                <div className='col-6'>
                    <img src={imageUrl} alt='image'/>
                </div>
            </div>
        </div>
    );
}