

const History=({history,moveTo,curentMove})=>{

    return(  
              <div className="history-wrapper">
            <ul className="history">
                {history.map((_,index)=>
                 (<li key={index}>
                    <button type="button"
                    className={`btn-move ${curentMove===index?'active':''}`} 
                    onClick={()=>moveTo(index)}>
                        {index === 0 ?'go to game start' : `go to move #${index}`}</button>
                  
              </li>
              ))}
              
            </ul>
        </div>
    )
}
export default History