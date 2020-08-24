import React,{Component} from 'react'

// In class component props is passed through 
// render and it can be called using the this keyword
class Corporate extends Component{
    render(props){
        return (
            <div>
                <h1>This is {this.props.name} in the {this.props.branch}</h1>
            </div>
        )
    }
}

export default Corporate;