import React, { useEffect, useState } from 'react';

import './GameField.css'

function GameField(props) {

  const [arr, setArr] = useState(['red', 'green', 'red', 'green'])
  const [paire, setPaire] = useState([])


  function openCell(event) {
    const color = event.target.id.match(/[a-z]/gi).join('')
    event.target.classList.add(color)
    setPaire([...paire, color])
  }

  useEffect(() => {
    console.log(paire);
    const classOfCell = paire[0]
    setTimeout(() => {
      if (paire.length === 2) {

        if (paire[0] === paire[1]) {
          const cells = document.getElementsByClassName(paire[0])

          console.log(cells);
          for (let i = 0; i = cells.length; i++) {
            console.log('hi ' + i);
            cells[i].classList.remove(classOfCell)
          }
          setPaire([])
        }
      }
    }, 1000)


  }, [paire])


  return (
    <div>
      {arr.map((el, index) => {
        return <div key={index}
          id={`${index}${el}`}
          className={`cell`}
          onClick={openCell}
        >
        </div>
      })}
    </div>
  );
}

export default GameField;
