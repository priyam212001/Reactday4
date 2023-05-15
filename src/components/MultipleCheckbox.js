import React,{Component} from 'react';

class MultipleCheckbox extends Component{
    constructor(){
        super();
        this.state={
            categories:[
                {id:1,value:'Angular'},
                {id:2,value:'React'},
                {id:3,value:'PHP'},
                {id:4,value:'Java'}
            ],
            checkedItems:new Map()
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
       var isChecked=event.target.checked;
       var item=event.target.value;
       this.setState(prevState =>({checkedItems:prevState.checkedItems.set(item,isChecked)}));
    }
    handleSubmit(event){
        console.log(this.state.value);
        event.preventDefault();
    }
    render(){
        return(
            <div>
                <h1>EXAMPLE OF MULTIPLECHECKBOX IN REACT</h1>
                <form onSubmit={this.handleSubmit}>
                    {
                        this.state.categories.map(item =>(
                            <li>
                                <label>
                                    <input type="checkbox" value={item.id}
                                    onChange={this.handleChange}/>
                                    {item.value}
                                </label>
                            </li>
                        ))
                    }<br></br>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}
export default MultipleCheckbox;