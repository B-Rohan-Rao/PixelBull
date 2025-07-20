import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import OpenAccount from "../OpenAccount";


export default function InvestmentPage() {
    return (
      <>
          <Hero/>
          <LeftSection imageUrl="media/images/investments-stocks.png"
                       productName="Stocks"
                       productDescription="Trade stocks for delivery or intraday on over 5000 stocks listed on National Stock Exchange (NSE) and Bombay Stock exchange (BSE)."
                       link1="#"
                       link1text="Kite "
                       link2="#"
                       link2text="Console "
                       link3="#"
                       link3text="Smallcase "
                       link4="#"
                       link4text="StockReports+ "
                       link5="#"
                       link5text="Streak "
                       link6="#"
                       link6text="Market overview "/>
          <RightSection imageUrl="media/images/investments-mf.png"
              productName="Direct mutual funds"
              productDescription="Invest in over 2000 direct mutual funds directly without a distributor. Save up to 1.5% in commissions every year."
              link1="#"
              link1text="Coin "/>
          <LeftSection imageUrl="media/images/investments-fo.png"
                       productName="Futures & Options"
                       productDescription="Trade metals, oil, and agri commodities on MCX and stock and index futures and options on NSE."
                       link1="#"
                       link1text="Kite "
                       link2="#"
                       link2text="Margin calculator "
                       link4="#"
                       link4text="Sensibull "
                       link5="#"
                       link5text="Streak "/>
          <RightSection imageUrl="media/images/ipo-products.png"
                        productName="IPO"
                        productDescription="Now apply online and invest in companies listing on the Indian exchanges with an IPO (Initial Public Offering) with your BHIM UPI app."
                        link1="#"
                        link1text="Kite "
                        link2="#"
                        link2text="Upcoming IPOs "/>
          <LeftSection imageUrl="media/images/gift-illustration.png"
                       productName="Gift stocks"
                       productDescription="Introduce your friends and family to the habit of investing for the long term by gifting them stocks, ETFs, mutual funds and gold bonds. A gift that keeps on giving."
                       link1="#"
                       link1text="Send a gift "/>
          <OpenAccount/>

      </>
    );
}