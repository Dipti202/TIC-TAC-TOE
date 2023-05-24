import React from "react";
// try make every code in component to  make clean separation
// here we will write draw match code
//const StatusMessage=({winner,playX,square})=>


//now gaming board is object so destructing it
const StatusMessage=({winner,gamingBoard})=>{

const{square, playX}=gamingBoard;   // --> this line replacement of gamingboard.square,gaming borad .playx
// for draw game we will check every square state. if all square state is not empty then macth will draw
 // to cheeck state value need state squqre which we get through prop and apply array ever methd will call back 
 // fuction. this call back function will check every array value and give true or false
 // if are square value is not null then get false oterwise true

 const noMoveLeft=square.every(squareValue=>squareValue!==null);

    const nextPlayer=playX?'X':'o'
//write a render without arugment fuction to satisfy all condition
    const Message=()=>{
if(winner)
{
   //<div>Winner is {winner}</div> 
    //after applying style code be like this
    //use reactfragment-replacement of div . if wnat to render without div.
    //<></> short version of reactfragment(it is an empty tag)
    return (
    <React.Fragment>Winner is
    <span className={winner==='X'? 'text-green':'text-orange'}>
         {winner}</span> </React.Fragment>)
}
if(!winner && noMoveLeft)
{
    return <><span className="text-orange">X </span>
     and <span className="text-green">o </span> Tied </>
}
if(!winner && !noMoveLeft){
//<div>nextplayer is {nextplayer}</div> 
return(<>Next Player is 
    <span className={playX?'text-green':'text-orange'}> {nextPlayer}</span> </>
)
}

return null;  // if no one condition will satisfy then will retun nothing
    }
    return(
        <div>{Message()}</div>
        
    )
}
export default StatusMessage