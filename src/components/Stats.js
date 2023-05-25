import { useState, useEffect } from 'react';
import '../css/stats.css';
import StatsRow from './StatsRow';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const Stats = () => {
    const token = ""
    const url = `https://finnhub.io/api/v1/quote?symbol=`
    const[stockData, setStockData] = useState([]);
    const [myStocks, setMyStocks] = useState([]);

    const getStockData = async (stock) => {
        try{
            const response = await fetch(`${url}${stock}${token}`, {
                method: 'GET',
              });
              const data = await response.json();
          
              const q = query(collection(db, 'myStocks'), where('ticker', '==', stock));
              const firebaseResponse = await getDocs(q);
              const firebaseData = firebaseResponse.docs.map((doc) => doc.data());
          
              const mergedData = { name: stock, data, firebaseData };
              const stockExists = stockData.some((item) => item.name === stock);
              if (!stockExists) {
                setStockData((prevData) => [...prevData, { name: stock, data }]);
              }
              const ownedStock = firebaseData.some((item) => item.ticker === stock)
                if(ownedStock){
                    setMyStocks((prevData) => [...prevData, mergedData]);
                }
        }catch(error) {
            console.log(error)
        }
    };

    useEffect(() => {
        const stocksList = ['AAPL', 'MSFT'];
        const fetchStockData = async () => {
          const promises = stocksList.map((stock) => getStockData(stock));
          await Promise.all(promises); 
        };
        fetchStockData();
      }, []);

    return(
        <div className="stats">
            <div className="stats__container">
                <div className="stats__header">
                    <p>Stocks</p>
                </div>
                <div className="stats__content">
                    <div className="stats__rows">
                    {myStocks.map((stock, i) => (
                        <StatsRow 
                            key={i}
                            name={stock.name}
                            openPrice={stock.data.o}
                            price={stock.data.c}
                        />
                    ))}
                    </div>
                </div>
                <div className="stats__header stats__lists">
                    <p>List</p>
                </div>
                <div className="stats__content">
                    <div className="stats__rows">
                    {stockData.map((stock, i) => (
                    <StatsRow
                        key={i}
                        name={stock.name}
                        openPrice={stock.data.o}
                        price={stock.data.c}
                    />
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats;

