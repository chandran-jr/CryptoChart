import React, { useState } from 'react';
import './App.css';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Card from './Components/Card';
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  const [btc,setBtc] = useState(31812);
  const [sol,setSol] = useState(400);
  const [eth,setEth] = useState(812);
  const [ada,setAda] = useState(80);

  const [btcPL,setBtcPL] = useState(+10);
  const [solPL,setSolPL] = useState(-10);
  const [ethPL,setEthPL] = useState(+23);
  const [adaPL,setAdaPL] = useState(-1);

  const [btcTVL,setBtcTVL] = useState(60000);
  const [solTVL,setSolTVL] = useState(50000);
  const [ethTVL,setEthTVL] = useState(8120);
  const [adaTVL,setAdaTVL] = useState(8000);


  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true')
    .then(res => {
      setBtc(res.data.bitcoin.usd);
      setBtcPL(res.data.bitcoin.usd_24h_change);
    }, 
    )
  } , [btcPL]);

    useEffect(() => {
      axios.get('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&include_24hr_change=true')
      .then(res => {
        setSol(res.data.solana.usd);
        setSolPL(res.data.solana.usd_24h_change);
      }, 
      )} , []);

      useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true')
        .then(res => {
          setEth(res.data.ethereum.usd);
          setEthPL(res.data.ethereum.usd_24h_change);
        }, 
        )} , []);

        useEffect(() => {
          axios.get('https://api.coingecko.com/api/v3/simple/price?ids=cardano&vs_currencies=usd&include_24hr_change=true')
          .then(res => {
            setAda(res.data.cardano.usd);
            setAdaPL(res.data.cardano.usd_24h_change);
          }, 
          )} , []);
          
  return (
    <div className="App">
      
      <div className="Trending">

        <div className="TrendingIcon">
          <TrendingUpIcon />
          </div>

          <div className="TrendingText">
           <h5>Trending Assets</h5>
        </div>

        </div>


      <div className="Cards">
        <Card coin="https://cryptologos.cc/logos/bitcoin-btc-logo.png" bg="linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(234, 179, 0, 0.06) 100%)" text="Bitcoin (BTC)" price={btc} pl={btcPL} tvl={btcTVL} pp1="https://www.pngall.com/wp-content/uploads/10/Solana-Crypto-Logo-PNG-File.png" pp2="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png" pp3="https://seeklogo.com/images/B/binance-coin-bnb-logo-CD94CC6D31-seeklogo.com.png?v=637697418070000000"/>
        <Card coin="https://www.pngall.com/wp-content/uploads/10/Solana-Crypto-Logo-PNG-File.png" bg="linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(220, 31, 255, 0.1) 100%)" text="Solana (SOL)" price={sol} pl={solPL} tvl={solTVL} pp1="https://cryptologos.cc/logos/bitcoin-btc-logo.png" pp2="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png" pp3="https://seeklogo.com/images/B/binance-coin-bnb-logo-CD94CC6D31-seeklogo.com.png?v=637697418070000000"/>
        <Card coin="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png" bg="linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(237, 240, 244, 0.1) 100%)" text="Ethereum (ETH)" price={eth} pl={ethPL} tvl={ethTVL} pp1="https://cryptologos.cc/logos/bitcoin-btc-logo.png" pp2="https://www.pngall.com/wp-content/uploads/10/Solana-Crypto-Logo-PNG-File.png" pp3="https://seeklogo.com/images/B/binance-coin-bnb-logo-CD94CC6D31-seeklogo.com.png?v=637697418070000000"/>
        <Card coin="https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/cardano_ada-512.png" bg="linear-gradient(180deg, rgba(98, 106, 136, 0.1) 0%, rgba(237, 240, 244, 0.1) 100%)" text="Cardano (ADA)" price={ada} pl={adaPL} tvl={adaTVL} pp1="https://cryptologos.cc/logos/bitcoin-btc-logo.png" pp2="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png" pp3="https://www.pngall.com/wp-content/uploads/10/Solana-Crypto-Logo-PNG-File.png"/>
      </div>

    </div>
  );
}

export default App;
