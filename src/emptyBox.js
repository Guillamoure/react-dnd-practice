import React from "react";
import { useDrop } from "react-dnd";

const EmptyBox = ({name, handleDrop, boxes}) => {

	const [{isOver, getItem}, drop] = useDrop(() => ({
    accept: "SQUARE",
    drop: (item) => handleDrop(item, name),
    collect: (monitor) => ({
      getItem: monitor.getItem(),
      isOver: monitor.isOver()
    })
  }), [boxes])

  let style = {
    height: '98px',
    width: '98px',
    EmptySizing: 'border-box',
    border: '1px solid grey',
    gridArea: name,
    backgroundColor: isOver ? "lightpink" : "white"
  }

	return (
		<section style={style} ref={drop}>
			
		</section>
	)
}

export default EmptyBox