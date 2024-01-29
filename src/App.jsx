import React, { useState } from 'react';


import './App.css'

function App() {
  const [userInput,setUserInput]=useState(0);
  const [Option,setOption]=useState('');
  const [D1,setD1]=useState(true);
  const [D2,setD2]=useState(true);
  const [D3,setD3]=useState(true);
  const [D4,setD4]=useState(true);


  const InputChange=(e)=>{
    // setUserInput(prev=>isNaN(e.target.value)?prev:e.target.value);
    setUserInput(prev=>
      {
        if(isNaN(e.target.value))
        {
          return prev
        }
        else
        {
          return e.target.value
        }
      }
    );
  };
  

  const Changeoption=(e)=>{
    setOption(e.target.value);
  
  }
  

  if(Option==='MtoC'){
    const Result1=parseFloat(userInput);
    if(!isNaN(Result1)){
      setOption(Result1/100);

    }
    setD1(false);


  }
  if(Option==='CtoM'){
    const Result1=parseFloat(userInput);
    if(!isNaN(Result1)){
      setOption(Result1*100);

    }
    setD2(false);
    
  }
  if(Option==='TtoF'){
    const Result1=parseFloat(userInput);
    if(!isNaN(Result1)){
      setOption(9/5*Result1+32);

    }
    setD3(false);
    
  }
  if(Option==='FtoT'){
    const Result1=parseFloat(userInput);
    if(!isNaN(Result1)){
      setOption(5/9*(Result1-32));

    }
    setD4(false);
    
  }



  const Reset=()=>{
    setUserInput('');
    setOption('');
    setD1(true);
    setD2(true);
    setD3(true);
    setD4(true);

    
    

  }

  return (
    <>
      <div class="wrapper">
        <div class="title">
           Unit Calculator
        </div>
        <form action="#" id="myform">
           <div class="field">
              <input type="text" value={userInput} onChange={InputChange} required/>
              <label>Hieght</label>
           </div>
           
           <select class="field" value={Option} onChange={Changeoption}>
              <option>Select</option>
              <option value="MtoC">Meter to Centimeter</option>
              <option value="CtoM">Centimeter to Meter</option>
              <option value="TtoF">Temprature to  Fahrenheit</option>
              <option value="FtoT"> Fahrenheit to Temperature</option>
            </select><br></br>
          
           {/* <div class="field">
              <input type="submit" value="Submit"/>
           </div> */}

           <div class="field">
              <input type="submit" onClick={Reset}  value="Reset"/>
           </div>

           <p hidden={D1}>Meter to Centimeter: {Option}</p>  
           <p hidden={D2}>Centimeter to Meter: {Option}</p>
           <p hidden={D3}>Temperature to  Fahrenheit: {Option}</p>
           <p hidden={D4}>Fahrenheit to Temperature: {Option}</p>
           
        </form>
      </div>
    </>
  )
}

export default App