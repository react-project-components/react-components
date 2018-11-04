import React, {lazy} from 'react';
import ReactDOM from 'react-dom';
import Modal from "./Modal";

const defaults = {
    maskClosable: false
}

export const confirmFactory = (options) => (config) => {
    const props = Object.assign({}, defaults, options, config);

    const div = document.createElement('div');
    document.body.appendChild(div);

    const unMount = () => {
        const unmountResult = ReactDOM.unmountComponentAtNode(div);
        if (unmountResult && div.parentNode) {
            div.parentNode.removeChild(div);
        }
    }

    const handleClose = () => {
        if (props.onCancel) {
            props.onCancel();
        }
        render(false);
    };

    const handleConfirm = () => {
        if (props.onOk) {
            props.onOk();
        }
        render(false);
    }

    const render = (visible) => {
        ReactDOM.render(
            <Modal
                {...props}
                visible={visible}
                afterClose={unMount}
                onOk={handleConfirm}
                onCancel={handleClose}>
                {props.content}
            </Modal>
            , div);
    }

    render(true);
}