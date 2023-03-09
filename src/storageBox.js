import React from 'react'
import Box from './box'
import { useDrag } from "react-dnd";

const StorageBox = ({color, h, w}) => {

  const [, drag] = useDrag(() => ({
		type: "SQUARE",
		item: {color, h, w}
	}))

  return (
		<div ref={drag}>
			<Box color={color} h={h} w={w}/>
		</div>
	)
}

export default StorageBox