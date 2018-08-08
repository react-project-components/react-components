import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Content extends Component {
    static defaultProps = {
        getTiggerPostion: f => f,
        setPopupContentVisible: f => f
    };

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    render() {
        const props = this.props;
        if (!props.visible) {
            return null;
        }
        let {top, left, height} = props.getTriggerPosition();
        return (
            ReactDOM.createPortal(
                <div
                    ref={props.contentRef}
                    style={{position: 'absolute', top: top + height, left: left}}
                    {...props.eventListeners}>
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
