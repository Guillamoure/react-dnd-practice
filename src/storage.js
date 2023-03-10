import React from "react";
import Box from "./box";

const Storage = ({handleDrag}) => {

	const boxes = [
		// {color: "red", h: 1, w: 1},
		// {color: "cyan", h: 1, w: 1},
		{color: "green", h: 1, w: 2},
		{color: "magenta", h: 2, w: 1},
		{color: "lemonchiffon", h: 3, w: 1},
		{color: "turquoise", h: 1, w: 3},
		// {color: "tomato", h: 3, w: 3}
	]

	const renderBoxes = () => {
		return boxes.map((box, i) => {
			return <Box color={box.color} h={box.h} w={box.w} key={i} element={"box"} handleDrag={handleDrag}/>
		})
	}


	return (
		<section id="storage">
			{renderBoxes()}
		</section>
	)
}

export default Storage