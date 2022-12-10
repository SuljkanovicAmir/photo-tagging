import React, {useState} from 'react'
import { formatTime } from '../utilities/formatTime'


function Header({ seconds }) {

const [isActive, setActive] = useState(false)

const handleStart = (e) => {
    setActive(current => !current)
  };
  


  return (
    <div className='header'>
      <nav>
        <ul>
          <li>findCharacter</li>
          <li>{formatTime(seconds)}</li>
          <div className='nav-characters'>
            <button onClick={handleStart}>3</button>
            <div className={isActive ? 'nav-characters-drop' : 'nav-characters-drop hidden'}>
              <li>Kenny</li>
              <li>Luigi</li>
              <li>Mario</li>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Header