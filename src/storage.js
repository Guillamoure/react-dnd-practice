import React from "react";
import Box from "./box";

const Storage = () => {

	const boxes = [
		{color: "red", h: 1, w: 1},
		{color: "cyan", h: 1, w: 1},
		{color: "green", h: 1, w: 2}
	]

	const renderBoxes = () => {
		return boxes.map((box, i) => {
			return <Box color={box.color} h={box.h} w={box.w} key={i} element={"box"}/>
		})
	}


	return (
		<section id="storage">
			{renderBoxes()}
		</section>
	)
}

export default Storage