import React from 'react'
import { useContext } from 'react'
import { myBosket } from '../App'
import { Result } from './Result'

export function HomePage() {
    const {setData}=useContext(myBosket)
    //setData=setCurrentdata
    function handleClick(){
        //logic to navigate the question component
        setData("question")
    }
  return (
    <div>
        <button className='btn btn-primary' onClick={handleClick}>Start Quiz</button>

        <img src="https://t4.ftcdn.net/jpg/03/45/88/07/360_F_345880772_zIT2mkdCzTthplO7xqaGGrMspN0jw0ll.webp"alt="name"/>

    </div>
  )
}

