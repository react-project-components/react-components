import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import Overlay from '../overlay';
import ActivableRenderer from '../hoc/ActivableRenderer';

class Modal extends Component {
    static defaultProps = {
        actions: [],
        visible: false,
        onOk: () => {
        },
        onCancel: () => {
        },
        okText: "确认",
        cancelText: "取消",
        showOk: true,
        showCancel: true,
        maskClosable: true,
        style:{}
    }

    renderFooter = () => {
        const props = this.props;
        if (props.footer === undefined) {
            let okBtnClassName = classnames('modal-button', 'modal-button-blue', props.okBtnClassName);
            let cancelBtnClassName = classnames('modal-button', 'modal-button-white', props.okBtnClassName);
            return (
                <nav className='modal-navigation'>
                    {
                        props.showOk && <button className={okBtnClassName} onClick={this.onOk}>{props.okText}</button>
                    }
                    {
                        props.showCancel &&
                        <button className={cancelBtnClassName} onClick={this.onCancel}>{props.cancelText}</button>
                    }
                </nav>
            )
        }
        return props.footer;
    }

    onOk = () => {
        this.props.onOk();
    }

    onCancel = () => {
        this.props.onCancel();
    }

    render() {
        const props = this.props;

        const className = classnames('modal', {'active': props.visible}, props.className);

        return (
            ReactDOM.createPortal(
                <div className='modal-wrapper'>
                    <Overlay
                        visible={props.visible}
                        onClick={props.maskClosable ? this.onCancel : null}
                    />
                    <div className={className} style={props.style}>
                        {
                            props.title ?
                                <div className='modal-header'>
                                    <h6 className='modal-title'>{props.title}</h6>
                                    <span onClick={this.onCancel} title='关闭窗体' className='modal-close'>×</span>
                                </div> : null
                        }
                        <section className="modal-body">
                            {props.children}
                        </section>
                        {
                            this.renderFooter()
                        }
                    </div>
                </div>,
                document.body
            )
        );
    }
}

Modal.propTypes = {
    visible: PropTypes.bool,
    children: PropTypes.node,
    onOverlayClick: PropTypes.func,
    title: PropTypes.node,
    footer: PropTypes.node,
    width: PropTypes.number
};


export default ActivableRenderer({delay: 400})(Modal);