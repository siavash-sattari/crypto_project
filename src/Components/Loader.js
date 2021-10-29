import React from "react";

import spinner from "../gif/spinner.gif";

export default function Loader() {
  return (
    <div>
      <img src={spinner} alt="Loading" />
      <h1>Loading ...</h1>
    </div>
  );
}
