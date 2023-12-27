
import './App.css';
import { HomePage } from './components/HomePage';
import { Question } from './components/Question';
import { Result } from './components/Result';
import { useState,createContext } from 'react';

export const myBosket=createContext()

function App() {
const [currentData,setCurrentData]=useState("homepage")
const [score,setMyScore]=useState(0)
  return (
    <div>
      <myBosket.Provider value = { {setData: setCurrentData,myScore:score,setScore:setMyScore} }>
      {currentData == "homepage" && <HomePage/>}
      {currentData == "question" && <Question/>}
    {currentData == "result" && <Result/>}
  </myBosket.Provider>
    
    </div>
  );
}

export default App;
