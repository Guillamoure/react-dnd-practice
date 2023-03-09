import React from "react";
import StorageBox from "./storageBox";

const Storage = () => {

	const boxes = [
		{color: "red", h: 1, w: 1},
		{color: "cyan", h: 1, w: 1},
		{color: "green", h: 1, w: 2}
	]

	const renderBoxes = () => {
		return boxes.map((box, i) => {
			return <StorageBox color={box.color} h={box.h} w={box.w} key={i}/>
		})
	}


	return (
		<section id="storage">
			{renderBoxes()}
		</section>
	)
}

export default Storage