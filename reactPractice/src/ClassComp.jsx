import { Component } from "react";

export default class Neil extends Component {
    constructor(){
        super();
        this.state = {
            name: "Neiddl", 
            age: 39, 
            array: [1,2,3,4,5]
        }

    }
    updateState = ()=>{
        this.setState({
            age: this.state.age * 2, 
            name: 'bin man'})
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>


                {this.state.array.map(item => item * item)}
                <button onClick={this.updateState}>Change State</button>
            </div>
        )
    }
}