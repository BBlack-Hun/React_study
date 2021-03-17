import React, { useReducer, Component } from 'react';

class Counter extends Component {

    state = {
        counter: 0,
        fixed: 1,
        // updateMe: {
        //     toggleMe: false,
        //     dontChangeMe: 1
        // }
    }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         counter: 0,
    //     };
    // }
    handleIncrease = () => {
        // this.setState({
        //     counter: this.state.counter + 1,
        // });
        this.setState(state => ({
            counter: state.counter + 1
        }))
        this.setState(state => ({
            counter: state.counter + 1
        }))
        this.setState(state => ({
            counter: state.counter + 1
        }))
        this.setState(state => ({
            counter: state.counter + 1
        }))
    };

    handleDecrease = () => {
        // 4개를 써도 1만 빠진다.
        // setState는 입력한 상태로 바뀌는 것이 아닌, 요청하는 것이다.
        // 리엑트는 상태가 바로 업데이트 되는 것이 아니라 비동기적으로 업데이트 되는 것이다.
        this.setState({
            counter: this.state.counter - 1,
        });
        this.setState({
            counter: this.state.counter - 1,
        });
        this.setState({
            counter: this.state.counter - 1,
        });
        this.setState({
            counter: this.state.counter - 1,
        });
    };

    // handleToogle = () => {
    //     this.setState({
    //         updateMe: {
    //             ...this.state.updateMe,
    //             toggleMe: !this.state.updateMe.toggleMe,
    //         }
    //     })
    // }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값: {this.state.fixed}</p>
            </div>
        );
    }
}

// function reducer(state, action) {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state +1;
//         case 'DECREMENT':
//             return state -1;
//         default:
//             throw new Error('Unhandled action');
//     }

// }

// function Counter() {
//     const [number, dispatch] = useReducer(reducer, 0);
//     const onIncrease = () => {
//         dispatch({
//             type: 'INCREMENT'
//         });
//     };
//     const onDecrease = () => {
//         dispatch({
//             type: 'DECREMENT'
//         });
//     }

//     return (
//         <div>
//             <h1>{number}</h1>
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     )
// }

export default Counter;
