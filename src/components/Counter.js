import { Component } from "react";

class Counter extends Component {
    constructor() {
        super();  // calling Component constructor
        this.state = {
            counter : 0,
        };
    }
    increment() {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    render() {
        return (
        <div>
            <h1>Count value is : {this.state.counter} </h1>
            <button onClick={()=> this.increment()}>Click</button>

        </div>
        )
    }
}

export default Counter;