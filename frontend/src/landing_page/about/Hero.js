import React from "react";

export default function Hero(){
    return (
        <div className='container mt-5'>
            <div className='row p-4 mt-5 mb-5'>
                <h1 className='fs-4 text-center '>We pioneered the discount broking model in India.<br/>
                    Now, we are breaking ground with our technology.
                </h1>
            </div>
            <div className='row p-4 mt-5 mb-5 border-top text-muted' style={{lineHeight:'1.8', fontSize:'15px'}}>
                <div className='col p-5'>
                    <p>
                        PixelBull was launched with a clear vision on the 15th of August, 2010 — to eliminate the
                        barriers faced by Indian traders and investors when it comes to affordability, service, and
                        cutting-edge technology. The name PixelBull represents our digital-first approach to bullish
                        investing.
                    </p>
                    <p>
                        With our innovative pricing strategies and proprietary technology stack, we’ve rapidly grown
                        into one of the most trusted names in the Indian brokerage landscape.
                    </p>
                    <p>
                        Today, over 1.6 crore users place millions of trades annually through our seamless investment
                        platforms, driving a significant share of India’s retail trading activity.
                    </p>

                </div>
                <div className='col p-5'>
                    <p>
                        In addition, we run a number of popular open online educational and community initiatives to empower retail traders
                        and investors.
                    </p>
                    <p>
                        <a href="#" style={{textDecoration:'none'}}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian
                        capital markets.
                    </p>
                    <p>
                        And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media
                        is saying about us or learn more about our business and product philosophies.
                    </p>
                </div>
            </div>
        </div>

    );
}