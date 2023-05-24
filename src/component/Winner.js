 export function calWinner(square){
const line=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],


];
for(let i=0;i<line.length;i++)
{
    const[a,b,c]=line[i];
    // console.log("squ",square);
    // console.log("line",line[i]);
    // console.log("a",square[a]);
    // console.log("b",square[b]);// for debugging purpose
    // console.log("c",square[c]);
    if(square[a]===square[b]&& square[a]===square[c])
    return {
        winner:square[a],
        winnerSquare:line[i] //line i 
    }
//return square[a];
}
//return null;
return { // retrn obj winner and winning square
    winner:null,
    winnerSquare:[]
}
}