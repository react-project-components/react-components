import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ActivableRenderer from '../hoc/ActivableRenderer';
import classnames from 'classnames';

class Content extends Component {
    static defaultProps = {
        getTiggerPostion: f => f,
        setPopupContentVisible: f => f,
        className: 'popover-content'
    };

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    render() {
        const props = this.props;

        let {top, left, height} = props.getTriggerPosition();

        const className = classnames(props.className, {'active': props.active});

        return (
            ReactDOM.createPortal(
                <div
                    ref={props.contentRef}
                    style={{position: 'absolute', top: top + height, left: left}}
                    className={className}
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

export default ActivableRenderer()(Content);
