import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Overlay extends Component {
    static propTypes = {
        visible: PropTypes.bool,
        children: PropTypes.node,
        className: PropTypes.string,
        onClick: PropTypes.func
    };

    static defaultProps = {};

    componentDidMount() {
        if (document.querySelectorAll('[data-react-component="overlay"]').length <= 1) {
            let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollBarWidth}px`;
        }
    }

    componentWillUnmount() {
        if (document.querySelectorAll('[data-react-component="overlay"]').length <= 1) {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
    }

    handleClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (this.props.onClick) {
            this.props.onClick(event);
        }
    }

    render() {
        const {visible, className, ...other} = this.props;
        return (
            <div
                data-react-component="overlay"
                {...other}
                onClick={this.handleClick}
                className={classnames('overlay', {'active': visible}, className)}/>
        );
    }
}

export default Overlay;
export {Overlay};
