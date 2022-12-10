import React, {useState} from 'react'

function DropdownMenu({active, clickLocation, setActive, characters, coords, setFoundCharacters}) {
  
  const [charActive, setCharActive] = useState([])


  const handleCharacters = (value) => {
    const arr = characters.filter((char) => char.id === value);
   
    if (arr) {
      arr.map((coord) => {
      if ((coord.xCoordinate.includes(coords.xCoord)) && (coord.yCoordinate.includes(coords.yCoord))) {
        alert('you found him')
        setFoundCharacters(prevState => [...prevState, coord.name])
        setCharActive(prevState => [...prevState, coord.id])
       
      return true
      } else {
        alert('keep looking')
        return false
      }})
    } else {
      return console.log('cant find')
    }
    setActive(false)
    
  }

  return (
    <div className={active ? 'dropdown-menu active' : 'dropdown-menu'}
        style={clickLocation}
    >
        <ul>
        {characters.map((char) => (
            <li className={charActive.includes(char.id) ? "character active" : "character"} key={char.id} value={char.id} onClick={e => handleCharacters(char.id)}>{char.name}</li>
         ))}
         </ul>
    </div>
  )
}

export default DropdownMenu




/*  

  make this work with firebase data
  just like i did with manual data in this component
  then next step

  Make array for found characters
  if you find charac it adds it to array
  (you can only add it once)
  if array length === 3
  you won
  else 
  keep looking


*/