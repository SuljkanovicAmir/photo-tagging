import React, {useEffect, useState} from 'react'
import DropdownMenu from './DropdownMenu'
import waldo from '../assets/images/waldo.jpg'
import { locationData } from '../firebase'

function Image({seconds, setScoreDisplayed, setScore, setTimeIsActive}) {

  
const [active, setActive] = useState(false)
const [clickLocation, setClickLocation] = useState({ left: "0%", top: "0%" });
const [coords, setCoords] = useState(null);
const [foundCharacters, setFoundCharacters] = useState([])
const [characters, setCharacters] = useState([])

useEffect(() => {
  locationData.then((data) => setCharacters(data))
  console.log(characters.map(char => char))
  console.log(characters.filter(el => el.id === 'patrick'))
},[characters])



const getClickLocation = e => {
  const xCoord = Math.round(
    (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
  );
  const yCoord = Math.round(
    (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
  );
  const coords = { xCoord, yCoord };
  console.log(coords)
  return coords;
};



const updateClickLocation = (coords) => {
  const { xCoord, yCoord } = coords;
  const updatedCoords = { left: xCoord + "%", top: yCoord + "%" };
  setClickLocation(updatedCoords);
};

const handleWin = (e) => {
  if (foundCharacters.length === 3) {
   alert('you won')
  } else {
    return false
  }
  return false
}



console.log(foundCharacters)


const handleMenu = (e) => {
  const coords = getClickLocation(e);
  setCoords(coords);
  updateClickLocation(coords);
  setActive(current => !current)
};

const handleScore = (e) => {
  setScoreDisplayed(true)
  setScore(seconds)
  setTimeIsActive(false)
}

  
  return (
    <div className='game-board'>
        <img src={waldo} alt="waldo"  onClick={handleMenu} />
        <DropdownMenu 
                active={active} 
                handleWin={handleWin}
                setFoundCharacters={setFoundCharacters} 
                characters={characters} 
                setActive={setActive} 
                clickLocation={clickLocation}
                handleScore={handleScore} 
                coords={coords}
        />
    </div>
  )
}

export default Image


