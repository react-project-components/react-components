import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Overlay extends Component {
    static propTypes = {
        visible: PropTypes.bool,
        children: PropTypes.node,
        className: PropTypes.string,
        lockScroll: PropTypes.bool,
        onClick: PropTypes.func,
        onEscKeyDown: PropTypes.func,
        theme: PropTypes.shape({
            visible: PropTypes.string,
            backdrop: PropTypes.string,
            overlay: PropTypes.string,
        }),
    };

    static defaultProps = {
        lockScroll: true,
    };

    componentDidMount() {
        const {visible, lockScroll, onEscKeyDown} = this.props;
        if (onEscKeyDown) document.body.addEventListener('keydown', this.handleEscKey);
        if (visible && lockScroll) document.body.style.overflow = 'hidden';
    }

    componentWillUpdate(nextProps) {
        if (this.props.lockScroll) {
            const becomingActive = nextProps.visible && !this.props.visible;
            const becomingUnactive = !nextProps.visible && this.props.visible;

            if (becomingActive) {
                document.body.style.overflow = 'hidden';
            }

            if (becomingUnactive && !document.querySelectorAll('[data-react-toolbox="overlay"]')[1]) {
                document.body.style.overflow = '';
            }
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.onEscKeyDown) {
            if (this.props.visible && !prevProps.visible) {
                document.body.addEventListener('keydown', this.handleEscKey);
            } else if (!this.props.visible && prevProps.visible) {
                document.body.removeEventListener('keydown', this.handleEscKey);
            }
        }
    }

    componentWillUnmount() {
        if (this.props.visible && this.props.lockScroll) {
            if (!document.querySelectorAll('[data-react-toolbox="overlay"]')[1]) {
                document.body.style.overflow = '';
            }
        }

        if (this.props.onEscKeyDown) {
            document.body.removeEventListener('keydown', this.handleEscKey);
        }
    }

    handleEscKey = (e) => {
        if (this.props.visible && this.props.onEscKeyDown && e.which === 27) {
            this.props.onEscKeyDown(e);
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
        const {visible, className, lockScroll, onEscKeyDown, ...other} = this.props; // eslint-disable-line
        return (
            <div
                {...other}
                onClick={this.handleClick}
                className={classnames('overlay', {'active': visible}, className)}/>
        );
    }
}

export default Overlay;
export {Overlay};
