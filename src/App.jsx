import Board from "./component/Board";
import { useState } from "react";
import './style.scss'
import { calWinner } from "./component/Winner";
import History from "./component/History";
import StatusMessage from "./component/StatusMessage";
const NEW_GAME=[{square:Array(9).fill(null),playX:false},
]
function App() {
// in history craete array of state obj to keep track move game 
//and goto move  then it become current move

// gaming state bydefault array and paly as objec
const [history,setHistory]=useState(NEW_GAME
  );
const [curentMove, setMove]=useState(0); //represent current move
const gamingBoard=history[curentMove];//derived value from history  as object of curent move and gaming board
console.log({history:history.length,curentMove})
 // to display order of play nee to pass props to app child component board.for thi manage state logic her
// const[square,setSquare]=useState(Array(9).fill(null));

    // create player as state boolean value
    //const[playX,setX]=useState(false)
    console.log(gamingBoard.square)
    //const nextPlayer=playX?'X':'o'
    const {winner,winnerSquare}=calWinner(gamingBoard.square);
    
   // const staustMessage=winner?`Winner is ${winner}`:`Next Player is ${nextPlayer}`
    const handleSqure=(clickPos)=>{
        //console.log(clickPos)

        //if filpped posstion is not null (x,o,null)
        //then retun exit function
        if(gamingBoard.square[clickPos]|| winner){
            return;
        }

      setHistory((currentHistory)=>{

        //traversing move
        const isTraversing=curentMove+1!==currentHistory.length
        console.log(isTraversing)
        // console.log(currentSq)
           //need to know latest gaming state from histry array
           const lastState=isTraversing?currentHistory[curentMove]: history[history.length-1]  //grab latest element from history array is going to be obj of this state
           //return currentSq.map((s,index)=>
           const nextSquareState=
           lastState.square.map((s,index)=>
            {
             //   console.log(currentSq)
                if(clickPos===index){ // here check cuurent index and click button position
                    return- lastState.playX?'X':'o'
                }
                return s
            })
const base=isTraversing?
currentHistory.slice(0,currentHistory.indexOf(lastState)+1)
:currentHistory; //to overwrite histrory move and apply new move
            //in order to set new value of history state will use call back and apply concate array to next gaming state of current history
            return base.concat({
              square:nextSquareState,
              playX:!lastState.playX
            }); 
        })
        //toggle between two player state
        //setX(currentX=>!currentX)

        //increment current move
  setMove(move=>move+1)
    };
    const moveTo=move=>{
      setMove(move)
    }
const resetGame=()=>{
  setHistory(NEW_GAME);
  setMove(0);
}
    return (
  
      <div
       className="app">
        <div >
          <h1>TIC <span className="text-green">TAC</span> TOE</h1>
          <h2><StatusMessage winner={winner}
           gamingBoard={gamingBoard} /></h2>
        <Board square={gamingBoard.square} handleSqure={handleSqure } winnerSquare={winnerSquare}/>
       
       <button type="button" 
       onClick={resetGame} className={
        `btn-reset ${winner ?'active':''}`}>start new game</button>
        <History history={history} moveTo={moveTo} curentMove={curentMove}/>
        </div>
      </div>
        
  )
}

export default App
