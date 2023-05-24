import React from "react"
import Square from "./Square"

const Board=({square,handleSqure,winnerSquare})=>{
    // const[square,setSquare]=useState(Array(9).fill(null));

    // // create player as state boolean value
    // const[playX,setX]=useState(false)
    // console.log(square)
    // const handleSqure=(clickPos)=>{
    //     //console.log(clickPos)

    //     //if filpped posstion is not null (x,o,null)
    //     //then retun exit function
    //     if(square[clickPos]){
    //         return;
    //     }
    //     setSquare((currentSq)=>{
    //        // console.log(currentSq)
    //         return currentSq.map((s,index)=>
    //         {
    //          //   console.log(currentSq)
    //             if(clickPos===index){ // here check cuurent index and click button position
    //                 return playX?'X':'o'
    //             }
    //             return s
    //         })
    //     })
    //     //toggle between two player state
    //     setX(currentX=>!currentX)
    // }
    // to avoid reption of component squre statement make a method and re-use it
    const renderSquare=(position)=>{

      //check winner square is part of combination
      const isWinnerSquare=winnerSquare.includes(position)
        return   (  <Square 
            value={square[position]}
             onClick={()=>handleSqure(position)}
              isWinnerSquare={isWinnerSquare}/>)
       
    }
    return(
        <div className= ' board'>
            <div className="board-row"> 
         
          {renderSquare(0)}  
          {renderSquare(1)}
          {renderSquare(2)}
            </div>
            <div className="board-row">
            {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
            </div>
            <div className="board-row">
            {/* <Square value={6}/>
            <Square value={7}/>
            <Square value={8}/> */}
            {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
            </div>
          
        </div>
    )
}
export default Board