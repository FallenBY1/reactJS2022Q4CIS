import React from 'react';

export class Counter extends React.Component {
    state = {
            counter: 0
    }

    changeCounter = (e) => {
        const shouldIncrease = !!parseInt(e.target.dataset.increase);
        if (shouldIncrease) {
            this.setState(prevState => ({ counter: prevState.counter + 1}));
        } else {
            this.setState(prevState => ({ counter: prevState.counter - 1}));
        }
    }

    render = () => {
        return <div onClick={this.changeCounter}>
            <p>Counter: { this.state.counter }</p>
            <button data-increase='1'>Increase</button>
            <button data-increase='0'>Decrease</button>
        </div>
    }
}