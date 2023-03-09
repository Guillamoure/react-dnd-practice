import React from "react";

const Box = ({color, h, w}) => {

	const style = {
		backgroundColor: color,
		height: `${h * 100}px`,
		width: `${w * 100}px`,
	}

	return (
		<section style={style}>
			
		</section>
	)
}

export default Box