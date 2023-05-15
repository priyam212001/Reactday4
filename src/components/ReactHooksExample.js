import React,{useState,useEffect} from 'react';

const useDocumentTitle= title=>{
    useEffect(()=>{document.title=title;},[title])
}
function ReactHooksExample(){
    const[count,setCount]=useState(0);
    useDocumentTitle(`You Clicked ${count} times`);

    
    return(
        <div>
            <p>
                YOU CLICKED {count} TIMES
            </p>
            <button onClick={() => setCount(count+1)}>CLICK ME</button>
        </div>
    );
}
export default ReactHooksExample;