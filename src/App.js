import './App.css';
import React from 'react';
import Field from './field';
import Storage from './storage';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App = () => {

  const [dragData, setDragData] = React.useState({})

  const handleDrag = ({perX, perY, w, h}) => {
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
        percentageY: countH
      })
  }


  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Field dragData={dragData} setDragData={setDragData}/>
        <Storage handleDrag={handleDrag}/>
      </DndProvider>
    </div>
  );
}

export default App;
