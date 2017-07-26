import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from './Checkbox'

class Habit extends React.Component {
    render() {
        const divStyle = {
            margin: "15px"
        };
        return (
            <div style={divStyle}>
                <Checkbox name={this.props.name}/>
            </div>
        );
    }
}

export default Habit;

