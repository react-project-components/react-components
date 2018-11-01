import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import Overlay from '../overlay';
import ActivableRenderer from '../hoc/ActivableRenderer';

class Dialog extends Component {
    static defaultProps = {
        actions: [],
        visible: false,
    }

    render() {
        var props = this.props;
        const actions = props.actions.map((action, idx) => {
            const className = classnames('dialog-button', action.className);
            return <button key={idx} {...action} className={className}>{action.label}</button>; // eslint-disable-line
        });

        const className = classnames('dialog', {'active': props.visible}, props.className);

        return (
            ReactDOM.createPortal(
                <div className='dialog-wrapper'>
                    <Overlay
                        visible={props.visible}
                        onClick={props.onOverlayClick}
                        onEscKeyDown={props.onEscKeyDown}
                        onMouseDown={props.onOverlayMouseDown}
                        onMouseMove={props.onOverlayMouseMove}
                        onMouseUp={props.onOverlayMouseUp}
                    />
                    <div className={className}>
                        {
                            props.title ?
                                <div className='dialog-header'>
                                    <h6 className='dialog-title'>{props.title}</h6>
                                    <span title='关闭窗体' className='dialog-close'>×</span>
                                </div> : null
                        }
                        <section role="body" className="dialog-body">
                            {props.children}
                        </section>
                        {actions.length
                            ? <nav className='dialog-navigation'>
                                {actions}
                            </nav>
                            : null
                        }
                    </div>
                </div>,
                document.body
            )
        );
    }
}

Dialog.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({
        className: PropTypes.string,
        label: PropTypes.string,
        children: PropTypes.node,
    })),
    visible: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    onEscKeyDown: PropTypes.func,
    onOverlayClick: PropTypes.func,
    onOverlayMouseDown: PropTypes.func,
    onOverlayMouseMove: PropTypes.func,
    onOverlayMouseUp: PropTypes.func,
    title: PropTypes.string,
};


export default ActivableRenderer()(Dialog);