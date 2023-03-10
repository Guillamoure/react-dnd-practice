export const validPlacement = (areas, {unitsHigh, unitsWide, percentageX, percentageY}, {x, y}) => {
    let valid = true
    let validSquares = []
    if (areas[x][y].area.includes("square")){
      if (!(unitsWide === 1 && unitsHigh === 1 && areas[x][y].area.includes("square"))){
        // find upper left most
        let topLeft = {row: y - percentageX + 1, col: x - percentageY + 1}
        console.log("topLeft", topLeft)

        // go the width
        for(let i = topLeft.col; i < topLeft.col + unitsHigh; i++){
          // and check each column down
          for(let j = topLeft.row; j < topLeft.row + unitsWide; j++){
            if (areas[i] && areas[i][j] && areas[i][j].area.includes("square")){
              validSquares.push(areas[i][j].area)
            } else {
              valid = false
            }
          }
        }
        console.log(validSquares)
        
        // if where you are grabing is not the rightmost section
      //   if (percentageX < unitsWide){
      //     for(let i = y; i <= y+(unitsWide - percentageX); i++){
      //       if (areas[x][i] && areas[x][i].area.includes("square")){
      //         validSquares.push(areas[x][i].area)
      //       } else {
      //         valid = false
      //       }
      //     }
      //   }
      //   if (percentageX > 1){
      //     for(let i = y; i > y-unitsWide; i--){
      //       if (areas[x][i] && areas[x][i].area.includes("square")){
      //         validSquares.push(areas[x][i].area)
      //       } else {
      //         valid =  false
      //       }
      //     }
      //   }
      //   // if where you are grabing the element is not in the lowest section
      //   if (percentageY < unitsHigh){
      //     // loop starting at the currect square, and keep going until you get to the lowest square
      //     // for the number of sections tall the element is
      //     for(let i = x; i <= x+(unitsHigh - percentageY); i++){
      //       // if that area is free and is a square
      //       if (areas[i] && areas[i][y].area.includes("square")){
      //         console.log(i, y, validSquares)
      //         // it is valid
      //         validSquares.push(areas[i][y].area)
      //       } else {
      //         valid = false
      //       }
      //     }
      //   }
      //   if (percentageY > 1){
      //     for(let i = x; i > x-unitsHigh; i--){
      //       if (areas[i] && areas[i][y].area.includes("square")){
      //         // console.log(i, y, validSquares)
      //         validSquares.push(areas[i][y].area)
      //       } else {
      //         valid =  false
      //       }
      //     }
      //   }
      //   if (percentageX < unitsWide && percentageY < unitsHigh){
      //     for(let j = x; j <= x+(unitsHigh - percentageY); j++){
      //       for(let i = y; i <= y+(unitsWide - percentageX); i++){
      //         if (areas[j] && areas[j][i]?.area.includes("square")){
      //           validSquares.push(areas[j][i].area)
      //         } else {
      //           valid = false
      //         }
      //       }
      //     }
      //   }
      //   // if you grab
      //   // the bottom left
      //   if (percentageX < unitsWide && percentageY === unitsHigh){
      //     // start on the bottom, and count up
      //     for(let i = x; i > x-unitsHigh; i--){
      //       for(let j = y; j <= y+(unitsWide - percentageX); j++){
      //         if (areas[i] && areas[i][j]?.area.includes("square")){
      //           validSquares.push(areas[i][j].area)
      //         } else {
      //           valid = false
      //         }
      //       }
      //     }
      //   }
      //   // top right grab on a square
      //   if (percentageY < unitsHigh && percentageX === unitsWide){
      //     for(let i = x; i <= x+(unitsHigh - percentageY); i++){
      //       for(let j = y; j > y-unitsWide; j--){
      //         if (areas[i] && areas[i][j]?.area.includes("square")){
      //           validSquares.push(areas[i][j].area)
      //         } else {
      //           valid = false
      //         }
      //       }
      //     }
      //   }
      //   // if where you are grabbing the element from
      //   // bottom left
      //   if (percentageY === unitsHigh && percentageX === unitsWide){
      //     // start on the bottom, and count up
      //     for(let i = x; i > x-unitsHigh; i--){
      //       for(let j = y; j > y-unitsWide; j--){
      //         if (areas[i] && areas[i][j].area.includes("square")){
      //           validSquares.push(areas[i][j].area)
      //         } else {
      //           valid =  false
      //         }
      //       }
      //     }
      //   }
      // } else {           
      //   validSquares.push(areas[x][y].area)
      }
      }
    return [validSquares, valid]  
}

