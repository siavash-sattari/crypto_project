import React, {useState, useEffect} from "react";

// API
import {getCoin} from "../services/api";

// Components
import Loader from "./Loader";

export default function Landing() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      console.log(data);
      setCoins(data);
    };

    fetchAPI();
  }, []);

  return (
    <>
      <input type="text" placeholder="Search" />
      {coins.length ? (
        <div>
          {coins.map((coin) => (
            <p key={coin.id}>{coin.name}</p>
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
