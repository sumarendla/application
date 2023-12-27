import React from 'react'
import { useState,useContext } from 'react'
import { myBosket } from '../App'

const myQuestions=[
    {
    title:"what is the useState?",
    A:"to store the data",
    B:"to delete the data",
    C:"both A and B",
    D:"none",
    Answer:"A"
    },
    {
    title:"what is the result for 20+40?",
    A: 100,
    B: 60,
    C: 40,
    D: 70,
    Answer:"B"
    },
    {
    title:"what is React?",
    A:"it is library",
    B:"it is framework",
    C:"both A and B",
    D:"none",
    Answer:"A"
    }
]

export function Question() {
    const [currentQuestion,setcurrentQuestion]=useState(0)
    const [correctAnswer,setAnswer]=useState("")
    
    //answer=A
    const{setData,myScore,setScore}=useContext(myBosket)

    function goToNextQuestion(){
        //before going to next qtn check the correct answer
       if( myQuestions[currentQuestion].Answer==correctAnswer){
        setScore(myScore+1)
       }
        setcurrentQuestion(currentQuestion+1)
        //logic to go to next question
    }
    function goToResult(){
        //here also write logic for check the correct answer for last qtn
        if( myQuestions[currentQuestion].Answer==correctAnswer){
            setScore(myScore+1)
           }
        setData("result")
    }
  return (
    <div style={{marginLeft:"200px",marginTop:"140px"}}>
        <div>
           <h3>Q:{myQuestions[currentQuestion].title}</h3>
           <div style={{display:"flex",alignItems:"center",marginTop:"-60px"}}>
           <span>A</span>
           <button onClick={function(){
            setAnswer("A")
           }}className='btn btn-success'>{myQuestions[currentQuestion].A}</button>
           </div> 
           <div style={{display:"flex",alignItems:"center",marginTop:"-60px"}}>
           <span>B</span>
           <button onClick={function(){
            setAnswer("B")
           }}className='btn btn-success'>{myQuestions[currentQuestion].B}</button>
           </div> 
           <div style={{display:"flex",alignItems:"center",marginTop:"-60px"}}>
           <span>C</span>
           <button onClick={function(){
            setAnswer("C")
           }}className='btn btn-success'>{myQuestions[currentQuestion].C}</button>
           </div> 
           <div style={{display:"flex",alignItems:"center",marginTop:"-60px"}}>
            <span>D</span>
           <button onClick={function(){
            setAnswer("D")
           }} className='btn btn-success'>{myQuestions[currentQuestion].D}</button>
           </div> 
        </div>
        {/*this continue button whenever go to the last qtn it will change to submit btn*/}
        {currentQuestion==myQuestions.length-1
        ?
        <button className='btn btn-danger'onClick={goToResult}>submit</button>
        :
        <button className='btn btn-primary'style={{marginTop:"20px"}} onClick={goToNextQuestion}>continue</button>

    }
       
    </div>
  )
}