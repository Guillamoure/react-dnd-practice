import React, {useEffect, useState} from "react";
import Box from "./box";
import EmptyBox from "./emptyBox";

const Field = () => {

  const [boxes, setBoxes] = useState([])
  const [area, setArea] = useState([])

  useEffect(() => {
    if (!area.length){
      let updatedAreas = []
      let count = 0
      for (let i = 0; i < 4; i++) {
        let row = [];
        for (let j = 0; j < 4; j++) {
          row.push(`square${count}`);
          ++count;
        }
        updatedAreas.push(row);
      }
      setArea(updatedAreas)
    }
  }, [])

  useEffect(() => {
    if (area.length){
      // find out how many of this element exists, and append that to the name
      console.log(area)
      console.log(boxes)
      // put it in area
    }
  }, [area])

  const handleDrop = (item, name) => {
    if (isValid(item, name)){
      let [x, y] = findEmptyBoxIndex(name)
      setBoxes([...boxes, {...item, x, y}])
      let count = countOfThisComponent(item)
      let updatedArea = area.map((a, i) => {
        return a.map((b, j) => {
          if (i === x && j === y){
            return `${item.element}${count}`
          } else {return b}
        })
      })
      setArea(updatedArea)
    }
  }

  const findEmptyBoxIndex = (name) => {
    let x = null
    let y = null

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (area[i][j] === name){
          x = i
          y = j
        }
      }
    }
    return [x, y]
  }

  const countOfThisComponent = (item) => {
    return boxes.filter(b => b.name === item.name ).length
  }

  const isValid = (item, name) => {
    if (item.h === 1 && item.w === 1){
      if (name.includes("square")){
        return true
      }
    }
  }

  const calcAreas = () => {
    if (!area.length) {
      return "";
    }
    let string = "";
    area.forEach((x) => {
      string += `'${x.join(" ")}'`;
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
    console.log(area)
    return area.map((a, x) => {
      return a.map((b, y) => {
        if (b.includes("square")) {
          return <EmptyBox name={b} handleDrop={handleDrop} boxes={boxes} />;
        } else if (b.includes("box")){
          let {color, h, w, element} = boxes.find(box => box.x === x && box.y === y)
          return <Box color={color} h={h} w={w} />
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