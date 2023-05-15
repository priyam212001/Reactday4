import React from 'react';


function ListItem(props){
    return <li>{props.value}</li>
}
function NumberList(props){
    const numbers=props.numbers;
    const listItems=numbers.map((num)=>
    <ListItem key={num.toString()}
    value={num}/>
    );
    return(
        <div>
            <h2>REACT MAP EXAMPLE</h2>
            <ul>{listItems}</ul>
        </div>
    );
}
export default NumberList;