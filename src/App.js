import Input from './components/Input';
import Crypto from './components/Crypto'
import './styles/App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {

  const [coins,setCoins] = useState([]);
  //set the data from API to out state
  const [search,setSearch] = useState('');
  //handle the input changes

  useEffect(()=>{
    axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then((response)=>{
      setCoins(response.data);
    })
    .catch(err=> console.error(err))
  },[])

  const filteredCoins = coins.filter((coin)=>{
    return coin.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="wrapper">
      <h1>
        diamond crypto
      </h1>
      <Input setSearch={setSearch}/>
      <div className="table-container">
        <div className="headings">
          <h2>index</h2>
          <h2>symbol</h2>
          <h2>name</h2>
          <h2>price</h2>
          <h2>change %</h2>
        </div>
          {filteredCoins.map((coin,index)=>{
                  return (
                    <Crypto key={index} index={index+1} name={coin.name} symbol={coin.symbol} price={coin.current_price} change={coin.price_change_percentage_24h}/>
                  )
          })}
      </div>
    </div>
  );
}

export default App;
