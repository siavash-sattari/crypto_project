import React, {useState, useEffect} from "react";

// API
import {getCoin} from "../services/api";

// Components
import Loader from "./Loader";
import Coin from "./Coin";

export default function Landing() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      console.log(data);
      setCoins(data);
    };

    fetchAPI();
  }, []);

  const serachHandler = (e) => {
    setSearch(e.target.value);
  };

  const serachedCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <input type="text" placeholder="Search" value={search} onChange={serachHandler} />
      {coins.length ? (
        <div>
          {serachedCoins.map((coin) => (
            <Coin key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} price={coin.current_price} marketCap={coin.market_cap} priceChange={coin.price_change_percentage_24h} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
