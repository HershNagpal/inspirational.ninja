import React from 'react';
import featuredQuoteImg from './assets/featuredQuote.png';
import redNinja from './assets/redNinja.png';
import upsidedownNinja from './assets/upsidedownNinja.png';
import inspirationalNinja from './assets/redText.png';
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

type quoteColor = "Blue"|"Red"|"Green"|"Black"|"White";
type colorCyleArray = Array<quoteColor>;

const colorCyle:colorCyleArray = ["Blue","Red","Green","Black"];

function App() {
  const [quoteGenerateNumber, setGenerateButton] = React.useState<number>(0);
  const generateQuoteStyle = {backgroundColor: colorCyle[quoteGenerateNumber%colorCyle.length]};
  return (
    <div className="App">
      <div className="navBar">
        <img src={inspirationalNinja} alt="Inspirational Ninja" className="inspirationalNinjaTextImg"/>
        <p className="menuButton">car</p>
      </div>
      <div className ="Container">
        <img src={redNinja} alt="Red Ninja" className="TopNinja"/>
        <p className="HeaderText">Our team of underpaid ninjas are ready<br/>to conjure inspirational quotes that<br/>will spark your imaginiation, ease your<br/>mind, and warm your heart.</p>
        <button className="GenerateButton" type="button" onClick={()=>setGenerateButton(quoteGenerateNumber+1)}>Get Inspired</button>
        {(quoteGenerateNumber!==0) ? <div className="GeneratedQuote" style={generateQuoteStyle}></div> : null}
        <div className="Line"/>
        <h1 className="FeaturedQuoteHeader">Featured Quote</h1>
        <img src={featuredQuoteImg} alt="Featured Quote" className="FeaturedQuoteImage"/>
        <div className="SocialMediaSection">
          <img src={upsidedownNinja} alt="Upsidedown Ninja" className="UpsidedownNinja"/>
        </div>
      </div>
    </div>
  );
};

export default App;
