import './App.css';
import React, { useState } from 'react';
import Field from './field';
import Storage from './storage';
import { useDrop } from "react-dnd";


const App = () => {

  const [dragData, setDragData] = useState({})
  const [hoveredSquare, setHoveredSquare] = useState("")

  const handleDrop = () => {
    setDragData({})
    setHoveredSquare("")
  }

  const [, drop] = useDrop(() => ({
    accept: "SQUARE",
    drop: handleDrop
  }))

  const handleDrag = ({perX, perY, w, h, id}) => {
    if (!perX){
      setDragData({})
    }
			let splitW = 1/w
			let countW = 1
			let foundW = false
			while(!foundW){
				if (countW * splitW > 100){
					break
				}
				if (perX >= ((splitW * countW)-splitW) && perX < (splitW * countW)){
					foundW = true
				} else {
					countW++
				}
			}
			// console.log(`You are in the ${countW} of ${w} in the width!`)

      let splitH = 1/h
			let countH = 1
			let foundH = false
			while(!foundH){
				if (countH * splitH > 1){
					break
				}
				if (perY >= ((splitH * countH)-splitH) && perY < (splitH * countH)){
					foundH = true
				} else {
					countH++
				}
			}
			// console.log(`You are in the ${countH} of ${h} in the height!`)

      setDragData({
        unitsWide: w,
        unitsHigh: h,
        percentageX: countW,
        percentageY: countH,
        id
      })
  }


  return (
      <div className="App" ref={drop}>
        <Field dragData={dragData} setDragData={setDragData} hoveredSquare={hoveredSquare} setHoveredSquare={setHoveredSquare} handleDrag={handleDrag}/>
        <Storage handleDrag={handleDrag}/>
      </div>
  );
}

export default App;
