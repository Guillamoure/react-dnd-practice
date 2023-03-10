import React, {useEffect, useState} from "react";
import Box from "./box";
import EmptyBox from "./emptyBox";
import {validPlacement} from "./utils/validPlacement";

const Field = ({dragData, setDragData, hoveredSquare, setHoveredSquare}) => {

  const [boxes, setBoxes] = useState([])
  const [areas, setArea] = useState([])

  useEffect(() => {
    if (Object.keys(dragData).length && !!hoveredSquare){

      // find active hovering square
      //TODO: x determines which row its in, so it is not the x value
        // same for y, it determines how far from the left it is, so it is not the y value
      const [x, y] = findEmptyBoxIndex(hoveredSquare)
      console.log(dragData)
      console.log(hoveredSquare)
      // find adjacent possible squares due to width/height

      let invalidSquares = []
      // let validSquares = []
      // let valid = true

      let cleanAreas = [...areas].map(a => {
        return a.map(b => {
          return {...b, valid: 0}
        })
      })

        const [validSquares, valid] = validPlacement(cleanAreas, dragData, {x, y})
        
        console.log("valid", validSquares)
        // console.log("invalid", invalidSquares)
        console.log("is it valid?", valid)

        // validSquares = validSquares.map(sq => {
        //   const [sqx, sqy] = findEmptyBoxIndex(sq)
        //   updatedArea[sqx][sqy] += "y"
        // })
      let updatedArea = [...cleanAreas].map((a, i) => {
        return a.map((b, j) => {
          if (validSquares.includes(b.area) && valid){
            return {...b, valid: 1}
          } else if (validSquares.includes(b.area) && !valid){ 
            return {...b, valid: -1}
          } else {
            return {...b, valid: 0}
          }
        })
      })
      setArea(updatedArea)
      // if all adjacent squares are able to accept
        // append a "y" on the end of that squares name
        // else, append a "n
        // this will notify the emptyBox component
    }
  }, [dragData, hoveredSquare])

  useEffect(() => {
    if (!areas.length){
      let updatedAreas = []
      let count = 0
      for (let i = 0; i < 4; i++) {
        let row = [];
        for (let j = 0; j < 4; j++) {
          row.push({area: `square${count}`, valid: 0});
          ++count;
        }
        updatedAreas.push(row);
      }
      setArea(updatedAreas)
    }
  }, [])

  useEffect(() => {
    if (areas.length){
      // find out how many of this element exists, and append that to the name
      console.log(areas)
      console.log(boxes)
      // put it in area
    }
  }, [areas])

  const handleHover = (name) => {
    setHoveredSquare(name)
  }

  const handleDrop = (item, name) => {
    console.log("is this hit?")
    if (isValid()){
      let [rowStart, rowEnd, colStart, colEnd] = findValidIndices()
      setBoxes([...boxes, {...item, rowStart, rowEnd, colStart, colEnd}])
      let count = countOfThisComponent(item)
      let updatedArea = areas.map((a, i) => {
        return a.map((b, j) => {
          if (i >= colStart && i <= colEnd && j >= rowStart && j <= rowEnd){
            return {area: `${item.element}${count}`}
          } else {return b}
        })
      })
      setArea(updatedArea)
    } 
    setDragData({})
    setHoveredSquare("")
  }

  const findEmptyBoxIndex = (name) => {
    let x = null
    let y = null

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (areas[i][j].area === name){
          x = i
          y = j
        }
      }
    }
    return [x, y]
  }

  const findValidIndices = () => {
    let indices = []
    for (let i=0; i < 4; i++){
      for (let j=0; j < 4; j++){
        if (areas[i][j].valid === 1){
          indices.push(j)
          indices.push(indices[0] + dragData.unitsWide - 1)
          indices.push(i)
          indices.push(indices[2] + dragData.unitsHigh - 1)
          break
        }
      }
    }

    return indices
  }

  const countOfThisComponent = (item) => {
    return boxes.filter(b => b.name === item.name).length
  }

  const isValid = () => {
    let validSquares = dragData.unitsWide * dragData.unitsHigh
    areas.forEach(a => {
      a.forEach(b => {
        if (b.valid === 1){
          validSquares--
        }
      })
    })

    return validSquares === 0
    // if (item.h === 1 && item.w === 1){
    //   if (area.includes("square")){
    //     return true
    //   }
    // }
  }

  const calcAreas = () => {
    if (!areas.length) {
      return "";
    }
    let string = "";
    areas.forEach((x) => {
      let justArea = x.map(a => a.area)
      string += `'${justArea.join(" ")}'`;
    });
    return string;
  };

  let style = {
    gridTemplateAreas: calcAreas(),
  }

  const renderBoxes = () => {
		return boxes.map((box, i) => {
			return <Box color={box.color} h={box.h} w={box.w} key={i * 1000}/>
		})
	}

  const renderAreas = () => {
    console.log(areas)
    console.log(boxes)
    return areas.map((a, x) => {
      return a.map((b, y) => {
        if (b.area.includes("square")) {
          return <EmptyBox data={b} handleDrop={handleDrop} boxes={boxes} handleHover={handleHover} dragData={dragData} areas={areas}/>;
        } else if (b.area.includes("box")){
          if (y != 0 && areas[x][y-1].area === b.area){
            return
          }
          if (x != 0 && areas[x-1][y].area === b.area){
            return
          }
          let {color, h, w, element} = boxes.find(box => box.colStart === x && box.rowStart === y)
          return <Box color={color} h={h} w={w} area={b.area}/>
        }
      });
    });
  }

  return (
    <main id="field" style={style}>
      {renderAreas()}
    </main>
  )
}

export default Field