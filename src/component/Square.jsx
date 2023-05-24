const Square=({value,onClick,isWinnerSquare})=>{
const colorClassName=value==='X'?'text-green':'text-orange'
const winningClass=isWinnerSquare ?'winning':'';
    return(
//want to highlight wining combinatiob
    <button type="button" 
    className={`square ${colorClassName}
     ${winningClass}`}
     onClick={onClick}>{value}
     </button>
        
    
)
}
export default Square