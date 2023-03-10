import React, {useEffect} from "react";
import { useDrag } from "react-dnd";

const Box = ({color, h, w, element, handleDrag, area}) => {

	const [{getInitialClientOffset, getInitialSourceClientOffset, isDragging}, drag] = useDrag(() => ({
		type: "SQUARE",
		item: {color, h, w, element},
		collect: (monitor) => ({
			getInitialClientOffset: monitor.getInitialClientOffset(),
			getInitialSourceClientOffset: monitor.getInitialSourceClientOffset(),
			isDragging: monitor.isDragging()
		})
	}))

	useEffect(() => {
		if (isDragging){

			// console.log(getInitialSourceClientOffset)
			// console.log(getInitialClientOffset)

			let perX = null
			let perY = null
	
			let width = w * 100 - 20
			let height = h * 100 - 20
			perX = (getInitialClientOffset.x - getInitialSourceClientOffset.x)/ width
			perY = (getInitialClientOffset.y - getInitialSourceClientOffset.y)/ height
			// console.log(getInitialClientOffset.x - getInitialSourceClientOffset.x)
			// console.log(w, h, color)
			// console.log(perX, perY)
	
			handleDrag({perX, perY, w, h})
	
		}
	}, [isDragging])

	const style = {
		backgroundColor: color,
		height: `${h * 100 - 20}px`,
		width: `${w * 100 - 20}px`,
		boxSizing: 'border-box',
		margin: '10px',
		borderRadius: '1em',
		gridArea: area
	}

	return (
		<section style={style} ref={drag}>
			
		</section>
	)
}

export default Box