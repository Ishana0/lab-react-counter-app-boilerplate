import { Component } from "react";

export default class CounterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    handleAdd = () => {
        this.setState({ count: this.state.count + 1});
    };
    handleMinus = () => {
        this.setState({ count: this.state.count - 1});
    };
    handleReset = () => {
        this.setState({ count: 0});
    };


    render() {
        return (
            <>
            <div id="main-container">
            <h1 id="name">Counter App</h1>
            <h1 id="count">Count: {this.state.count}</h1>
            <div id="container">
            <button id="plus" onClick={this.handleAdd}>+</button>
            <button id="minus" onClick={this.handleMinus}>-</button>
            <button id="reset" onClick={this.handleReset}>Reset</button>
            </div>
            </div>
            </>
        );
    }
}