import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import Image from '../components/Image'
import StartScreen from '../components/StartScreen'
import DisplayScore from '../components/DisplayScore'

function Layout({seconds, setTimeIsActive}) {

  const [isScoreDisplayed, setScoreDisplayed] = useState(false)
  const [score, setScore] = useState(0)

  return (
   <>
    <Header seconds={seconds}/>
    <Image  seconds={seconds} setScoreDisplayed={setScoreDisplayed} setScore={setScore} setTimeIsActive={setTimeIsActive}/>
    <StartScreen setTimeIsActive={setTimeIsActive} />
    <DisplayScore isScoreDisplayed={isScoreDisplayed} score={score} />
   </>
  )
}

export default Layout