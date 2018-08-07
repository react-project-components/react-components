import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Content extends Component {
    static defaultProps = {
        getTiggerPostion: f => f
    };

    componentDidMount(){

    }

    componentWillReceiveProps(nextProps){

    }

    componentWillUnmount(){

    }

    render() {
        const props = this.props;
        if (!props.visible) {
            return null;
        }
        let {top, left, height} = props.getTriggerPosition();
        return (
            ReactDOM.createPortal(
                <div style={{position: 'absolute', top: top + height, left: left}}
                >
                    {
                        props.children
                    }
                </div>,
                document.body
            )
        )
    }
}

export default Content;
