import React from 'react'

function Crypto({index,name,price,change,symbol}) {
    return (
        <div className="crypto-row">
                <h3 className="index">
                    {index}
                </h3>
                <h3 className="symbol">
                    {symbol}
                </h3>
                <h3 className="name">
                    {name}
                </h3>
                <h3 className="price">
                    ${price}
                </h3>
                <h3 style={{
                    color : change < 0 ? 'red' : 'limegreen' 
                }} className="change">
                    {change}%
                </h3>
        </div>
    )
}

export default Crypto
