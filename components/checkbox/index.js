import React from 'react';
import classnames from 'classnames';

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked : false
        }
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.checked !== this.state.checked){
            this.setState({checked:nextProps.checked});
        }
    }

    onClick = () => {
        this.setState({checked:!this.state.checked});
    }

    render() {
        const props = this.props;
        const state = this.state;
        return (
            <label className='rc-checkbox' onClick={this.onClick}>
                <span className={`rc-checkbox-inner ${state.checked ? 'active' : ''}`}></span>
                {props.children}
            </label>
        );
    }
}
