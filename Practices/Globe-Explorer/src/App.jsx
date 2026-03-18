import { use, useState } from "react";
import "./App.css";

function App() {
  const wetherInfo = async () => {
    const res = await fetch(
      "https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=32lqDkA4gcqTNHjAfqruwzuw15cdrZBH",
    );

    return res.json();
  };
  // const data = use(wetherInfo());
  // console.log(data);

  return (
    <>
      <h1 className="card">I am React</h1>
    </>
  );
}

export default App;
