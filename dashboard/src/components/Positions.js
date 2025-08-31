import React, { useState, useEffect } from "react";
// import {holdings, positions} from "../data/data";
import axios from "axios";

const Positions = () => {
    const [allPositions, setAllPositions] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3002/allPositions").then((res)=>{
            console.log(res.data);
            setAllPositions(res.data);
        })
    }, []);

    return (
        <>
            <h3 className="title">Positions ({allPositions.length})</h3>

            <div className="order-table">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Instrument</th>
                        <th>Qty.</th>
                        <th>Avg.</th>
                        <th>LTP</th>
                        <th>P&L</th>
                        <th>Chg.</th>
                    </tr>

                    {allPositions.map((stock, index) => {
                        const currValue = stock.price * stock.qty;
                        const isProfit = currValue - stock.avg * stock.qty >= 0.0;
                        const profClass = isProfit ? "profit":"loss";
                        const dayClass = stock.isLoss ? "loss":"profit"

                        return (
                            <tr key={index}>
                                <td style={{fontSize:'12px'}}>{stock.product}</td>
                                <td style={{fontSize:'12px'}}>{stock.name}</td>
                                <td style={{fontSize:'12px'}}>{stock.qty}</td>
                                <td style={{fontSize:'12px'}}>{stock.avg.toFixed(2)}</td>
                                <td style={{fontSize:'12px'}}>{stock.price.toFixed(2)}</td>
                                <td className={profClass} style={{fontSize:'12px'}}>{(currValue - stock.avg * stock.qty).toFixed(2)}</td>
                                <td className={dayClass} style={{fontSize:'12px'}}>{stock.day}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </>
    );
};

export default Positions;