import React, {useState, useEffect} from "react";

import {getCoin} from "../services/api";

export default function Landing() {
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      console.log(data);
    };

    fetchAPI();
  }, []);

  return <div>Landing</div>;
}
