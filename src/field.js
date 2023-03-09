import React from "react";
import { useDrop } from "react-dnd";
import Box from "./box";

const Field = () => {

  const [boxes, setBoxes] = React.useState([{color: "grey", h: 1, w: 1}])

  React.useEffect(() => {
    console.log("what is the boxes", boxes)
  }, [boxes])

  const handleDrop = (item) => {
    console.log(boxes)
    setBoxes([...boxes, item])
  }

  const [{isOver, getItem}, drop] = useDrop(() => ({
    accept: "SQUARE",
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      getItem: monitor.getItem(),
      isOver: monitor.isOver()
    })
  }), [boxes])

  const renderBoxes = () => {
		return boxes.map((box, i) => {
			return <Box color={box.color} h={box.h} w={box.w} key={i * 1000}/>
		})
	}

  return (
    <main id="field" ref={drop}>
      {renderBoxes()}
    </main>
  )
}

export default Field