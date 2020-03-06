import React from 'react';
import logo from './logo.svg';
import './App.css';

type Colors = "Blue"|"Red"|"Green"


type Colors =
  | typeof COLOR_RED
  | typeof COLOR_BLUE;
const testThing:StateType = ["Car", null, null];

const ResultTypeDone = "done" as const;
const ResultTypeContinue = "continue" as const;

type ResultDone = {
    type: typeof ResultTypeDone;
    value: number;
}

type ResultContinue = {
    type: typeof ResultTypeContinue;
};

type Result = ResultDone | ResultContinue;

const handleResult = (r: Result) => {
    if (r.type === ResultTypeDone) {
        console.log(r.value);
  }
};


function App() {
  const [message, setMessage] = React.useState<string | null>(null);
  return (
    <div className="App">
      <div className ="Container">
        <div className="Ninja"/>
        <p className="HeaderText">Our Team Of Underpaid Ninjas Are Ready<br/>To Conjure Inspirational Quotes That<br/>Will Spark Your Imaginiation, Ease Your<br/>Mind, And Warm Your Heart.</p>
        <button className="GenerateButton" type="button" onClick={()=>setMessage("cars")}>Get Inspired</button>
        {(message!=null) ? <p>{message}</p> : null}
        <div className="Line"/>
        <h1 className="FeaturedQuote">Featured Quote</h1>
        <div className="QuoteImage"/>
      </div>
    </div>
  );
}

export default App;
