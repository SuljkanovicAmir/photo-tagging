import React, {useEffect, useState} from 'react'
import './App.css';
import Layout from './layout/Layout';

function App() {

  const [timeIsActive, setTimeIsActive] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let timer = null;
    if(timeIsActive){
      timer = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
    return () => {
      clearInterval(timer);
    };
  });



  

  return (
    <div className="App">
      <Layout seconds={seconds} setTimeIsActive={setTimeIsActive} />
    </div>
  );
}

export default App;
