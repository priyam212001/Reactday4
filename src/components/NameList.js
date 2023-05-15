import React from 'react';
import { ReactDOM  } from 'react';


function NameList(props){
    const myLists=props.myLists;
    const listItems=myLists.map((myList)=><li>{myList}</li>)
    return(
        <div>
            <h2>REACT MAP EXAMPLE</h2>
            <ul>{listItems}</ul>
        </div>
    )
}
export default NameList;
