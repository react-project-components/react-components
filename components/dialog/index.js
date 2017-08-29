import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import Portal from '../hoc/Portal';
import Overlay from '../overlay';
import ActivableRenderer from '../hoc/ActivableRenderer';

class Dialog extends Component {
    static defaultProps = {
        actions: [],
        active: false,
    }

    render() {
        var props = this.props;
        const actions = props.actions.map((action, idx) => {
            const className = classnames('button', action.className);
            return <button key={idx} {...action} className={className}/>; // eslint-disable-line
        });

        const className = classnames('dialog', {'active': props.active,}, props.className);

        return (
            <Portal className='wrapper'>
                <Overlay
                    active={props.active}
                    onClick={props.onOverlayClick}
                    onEscKeyDown={props.onEscKeyDown}
                    onMouseDown={props.onOverlayMouseDown}
                    onMouseMove={props.onOverlayMouseMove}
                    onMouseUp={props.onOverlayMouseUp}
                />
                <div data-react-toolbox="dialog" className={className}>
                    <section role="body">
                        {props.title ? <h6 className='dialog-title'>{props.title}</h6> : null}
                        {props.children}
                    </section>
                    {actions.length
                        ? <nav className='dialog-navigation'>
                            {actions}
                        </nav>
                        : null
                    }
                </div>
            </Portal>
        );
    }
}

Dialog.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({
        className: PropTypes.string,
        label: PropTypes.string,
        children: PropTypes.node,
    })),
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    onEscKeyDown: PropTypes.func,
    onOverlayClick: PropTypes.func,
    onOverlayMouseDown: PropTypes.func,
    onOverlayMouseMove: PropTypes.func,
    onOverlayMouseUp: PropTypes.func,
    title: PropTypes.string,
};


export default ActivableRenderer(Dialog);