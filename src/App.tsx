import React from 'react';
import logo from './logo.svg';
import './App.css';

/*
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
*/

//https://mercuryannualreport.co.nz/

function App() {
  const [quoteGenerateNumber, setGenerateButton] = React.useState<number>(0);
  return (
    <div className="App">
      <div className ="Container">
        <div className="Ninja"/>
        <p className="HeaderText">Our Team Of Underpaid Ninjas Are Ready<br/>To Conjure Inspirational Quotes That<br/>Will Spark Your Imaginiation, Ease Your<br/>Mind, And Warm Your Heart.</p>
        <button className="GenerateButton" type="button" onClick={()=>setGenerateButton(quoteGenerateNumber+1)}>Get Inspired</button>
        {(quoteGenerateNumber!==0) ? <div className="generatedQuote"></div> : null}
        <div className="Line"/>
        <h1 className="FeaturedQuote">Featured Quote</h1>
        <div className="QuoteImage"/>
        <div className="SocialMediaSection">
        </div>
      </div>
    </div>
  );
}

export default App;
