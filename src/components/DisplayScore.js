import React from 'react'
import { formatTime } from '../utilities/formatTime'

function DisplayScore({ score, isScoreDisplayed }) {

  return (
    <div className={isScoreDisplayed ? 'display-score active' : 'display-score'}>
            <h1>Your time: {formatTime(score)}</h1>
    </div>
  )
}

export default DisplayScore