import React, { useEffect, useState } from 'react';
import './Card.css';

function Card({coin,bg,text,price,pl,tvl,pp1,pp2,pp3}: {coin: string, bg: string, text: string, price: number, pl: number, tvl: number, pp1: string, pp2: string, pp3: string}) {

  const [color,setColor] = useState("#00FFA3");
  const [symbol,setSymbol] = useState("+");

  useEffect(() => {
    if(pl > 0) {
      setColor("#00FFA3")
      setSymbol("+")
    } else {
      setColor("#FF4D4D")
      setSymbol("")
    }

  }, [pl]);

  return (
    <div className="Card">

      <div className="Circle__Outer">
        <div className="Circle" style={{background: `${bg}`}}>
                <img className="Coin" src={coin} alt=""/>
        </div>
        </div>


        <div className="Container">

            <h3 style={{color: "#737BAE", opacity: "0.9", fontSize: "12px", marginTop: "80px"}}>{text}</h3>

            <div className="PriceContainer"> 
                <h3 className="Price">${price}</h3>

                <div className="PLContainer">
                  <p style={{color: color}}>{symbol}{pl.toFixed(2)}%</p>
                </div>
              </div>

              <h3 style={{color: "#5A5F7D", opacity: "0.9", fontSize: "12px", marginTop: "10px"}}>Price</h3>

              <div className="PriceContainer"> 
                <h3 className="Price">${tvl}</h3>
              </div>

              <h3 style={{color: "#5A5F7D", opacity: "0.9", fontSize: "12px", marginTop: "10px"}}>TVL</h3>

              <div className="PopularContainer"> 
                <img className="ppImage" src={pp1} alt=""/>
                <img className="ppImage" src={pp2} alt=""/>
                <img className="ppImage" src={pp3} alt=""/>
              </div>

              <h3 style={{color: "#5A5F7D", opacity: "0.9", fontSize: "12px", marginTop: "10px"}}>Popular pairs</h3>

            </div>

    </div>
  )
}

export default Card