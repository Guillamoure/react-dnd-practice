import React from "react";
import { useDrag } from "react-dnd";

const Box = ({color, h, w, element}) => {

	const [, drag] = useDrag(() => ({
		type: "SQUARE",
		item: {color, h, w, element}
	}))

	const style = {
		backgroundColor: color,
		height: `${h * 100 - 20}px`,
		width: `${w * 100 - 20}px`,
		boxSizing: 'border-box',
		margin: '10px',
		borderRadius: '1em',
	}

	return (
		<section style={style} ref={drag}>
			
		</section>
	)
}

export default Box