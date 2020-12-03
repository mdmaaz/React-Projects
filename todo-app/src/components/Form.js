import React from 'react'
import shortid from 'shortid'

class Form extends React.Component{

    state = {
        text: ""
    }

    handleChange =(event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event)=> {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        })
        this.setState({
            text: ""
        });
    }

    render(){
        return (
           <form id="todo-form" onSubmit = {this.handleSubmit}>
                <input 
                    className="todo" 
                    name="text"
                    value={this.state.text} 
                    onChange={this.handleChange}
                    placeholder="Enter Text"/>
                <button onClick={this.handleSubmit}>Add</button>
            </form>
        )
    }
}

export default Form;