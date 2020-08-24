import React from 'react'



export default class State extends React.Component{
    constructor(){
        super();
        this.state={
            count:0,
            data:{
                name:"Ravi",
                role:"Student"
            }
        }

    }

    increment=()=>{
        this.setState({
            count: this.state.count+1
        })
    }

    decrement=()=>{
        this.setState({
            count:this.state.count-1
        })
    }

    reset=()=>{
        this.setState({
            count:0
        })
    }

    render(){
        return(
            <div>
                <h2>{ this.state.count }</h2>
                <h3>{this.state.data.name } and {this.state.data.role}</h3>
                <button onClick={this.increment}>Increase</button>
                <button onClick={this.decrement}>Decrease</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

