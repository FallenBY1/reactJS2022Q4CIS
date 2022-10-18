import React from "react";

/*
Counter Using React.Component
 */
export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    changeCounter = (increment) => {
        if (increment) {
            this.setState(prevState => ({ counter: prevState.counter + 1}));
        } else {
            this.setState(prevState => ({ counter: prevState.counter - 1}));
        }
    }

    render() {
        return <div>
            <p>Counter: { this.state.counter }</p>
            <button onClick={() => this.changeCounter(true)}>Increase</button>
            <button onClick={() => this.changeCounter(false)}>Decrease</button>
        </div>
    }
}