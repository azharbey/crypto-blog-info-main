import React, { useState, useEffect } from 'react';

interface CryptoPrice {
  id: string;
  symbol: string;
  current_price: number;
  // Add more fields as needed
}

const CryptoTicker: React.FC = () => {
  const [prices, setPrices] = useState<CryptoPrice[]>([]);

  const fetchPrices = async () => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
      const data = await response.json();
      setPrices(data);
    } catch (error) {
      console.error('Failed to fetch crypto prices:', error);
    }
  };

  useEffect(() => {
    fetchPrices();
    const intervalId = setInterval(fetchPrices, 10000); // Update every 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container flex justify-around space-x-4 overflow-x-auto">
      {prices.map(coin => (
        <div key={coin.id} className="flex items-center space-x-2 marquee-left-to-right">
          <span className="font-bold">{coin.symbol.toUpperCase()}:</span>
          <span>${coin.current_price.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
};

export default CryptoTicker;
