import React from 'react'
import { useContext } from 'react'
import { myBosket } from '../App'


export function Result() {
    const {setData,myScore}=useContext(myBosket)
    function goToHomePage(){
        //logic to goto homepage
    setData("homepage")
        
    }
  return (
    <div>
        <h2>your score out of 3 is {myScore}</h2>
        <button className="btn btn-success" onClick={goToHomePage}>RetakeQuiz</button>
    </div>
  )
}