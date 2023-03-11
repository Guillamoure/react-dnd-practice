import React, {useEffect} from "react";
import { useDrag } from "react-dnd";

const Box = ({color, h, w, element, handleDrag, area, coordinates=null, removeElement, id}) => {

	const [{getInitialClientOffset, getInitialSourceClientOffset, isDragging, didDrop}, drag] = useDrag(() => ({
		type: "SQUARE",
		item: {color, h, w, element, coordinates, id},
		collect: (monitor) => ({
			getInitialClientOffset: monitor.getInitialClientOffset(),
			getInitialSourceClientOffset: monitor.getInitialSourceClientOffset(),
			isDragging: monitor.isDragging(),
			didDrop: monitor.didDrop()
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
	
			handleDrag({perX, perY, w, h, id})
	
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

	const handleRemove = () => {
		removeElement(id)
	}

	return (
		<section style={style} ref={drag}>
			{coordinates && <button onClick={handleRemove}>X</button>}
		</section>
	)
}

export default Box