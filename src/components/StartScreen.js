import React, {useState} from 'react'

function StartScreen( {setTimeIsActive}) {

const [isActive, setActive] = useState(false)

const handleStart = (e) => {
    setActive(current => !current)
    setTimeIsActive(true)
  };
  

  return (
    <div className={isActive ? 'start-screen hidden' : 'start-screen'}>
        <h1>findCharacter</h1>
        <div className='start-div'>
            <div className='start-img'></div>
            <div className='start-list'>
                <ul>
                    <li>Kenny</li>
                    <li>Mario</li>
                    <li>Luigi</li>
                    <button onClick={handleStart}>Start</button>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default StartScreen