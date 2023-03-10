import React, {useEffect} from "react";
import { useDrop } from "react-dnd";

const EmptyBox = ({data, handleDrop, boxes, handleHover, dragData, areas}) => {

	const [{isOver, getItem}, drop] = useDrop(() => ({
    accept: "SQUARE",
    drop: (item) => handleDrop(item, data.area),
    collect: (monitor) => ({
      getItem: monitor.getItem(),
      isOver: monitor.isOver()
    })
  }), [boxes, dragData, areas])

  useEffect(() => {
    if (isOver){
      handleHover(data.area)
    }
  }, [isOver])

  let style = {
    height: '98px',
    width: '98px',
    EmptySizing: 'border-box',
    border: '1px solid grey',
    gridArea: data.area,
    backgroundColor: "white"
  }

  if (Object.keys(dragData).length) {
    if (data.valid === 1){
      style.backgroundColor = "lightgreen"
    } else if (data.valid === -1) {
      style.backgroundColor = "lightpink"
    }
  }

	return (
		<section style={style} ref={drop}>
			
		</section>
	)
}

export default EmptyBox