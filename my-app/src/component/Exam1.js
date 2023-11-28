// rcc치고 엔터-> 자동으로 완성됨!
import React, { Component } from 'react';

class Exam1 extends Component {

    constructor(props) { // 생성자
        super(props);
        this.state = { count : 0 }; // 값 초기화 전 super를 먼저 작성해야 함!
    }

    handleClick = () => {
        this.setState({ count : this.state.count + 1 }); // 현재 상태 카운트에 +1 해준 것을 세팅해주겠다!
    }

    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        );
    }
}

export default Exam1;