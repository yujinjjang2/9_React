import React, { Component } from 'react';

class Exam1 extends Component {

    constructor(props) {
        super(props);
        this.state = {count : 0};
    }

    handleClick = () => {
        this.setState({count : this.state.count + 1});
    }

    handleClick1 = () => {
        this.setState({count : this.state.count - 1});
    }

    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleClick}>Increment</button>
                <button onClick={this.handleClick1}>Decrement</button>
            </div>
        );
    }
}

export default Exam1;