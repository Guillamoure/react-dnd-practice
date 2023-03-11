export const validPlacement = (areas, {unitsHigh, unitsWide, percentageX, percentageY}, {x, y}) => {
    let valid = true
    let validSquares = []
    if (areas[x][y].area.includes("square")){

      if (!(unitsWide === 1 && unitsHigh === 1 && areas[x][y].area.includes("square"))){
        
        let topLeft = {row: y - percentageX + 1, col: x - percentageY + 1}

        for(let i = topLeft.col; i < topLeft.col + unitsHigh; i++){

          for(let j = topLeft.row; j < topLeft.row + unitsWide; j++){

            if (areas[i] && areas[i][j] && areas[i][j].area.includes("square")){
              validSquares.push(areas[i][j].area)
            } else {
              valid = false
            }

          }
        }
      } else {           
        validSquares.push(areas[x][y].area)
      }
    }
  return [validSquares, valid]  
}

export const removeElementFromAreas = (id, areas) => {
  // let {rowStart, rowEnd, colStart, colEnd} = coordinates
  let count = 0
  return [...areas].map((a, i) => {
    return a.map((b, j) => {
      if (id === b.area){
        return {area: `square${count++}`, valid: 0}
      } else {
        count++
        return b
      }
    })
  })
}

export const removeElementFromBoxes = (id, boxes) => {
  return [...boxes].filter(box => id !== box.id)
}

