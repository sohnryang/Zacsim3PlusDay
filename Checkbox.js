import React from 'react';
import ReactDOM from 'react-dom';

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        
    }

    render() {
        function checkboxClicked(e) {
            this.props.checked = !(this.props.checked);
        }
        return (
            <div>
                <img src="unchecked.svg" height="25" width="25" onClick={checkboxClicked}/>
                {this.props.name}
            </div>
        );
    }
}

export default Checkbox;

