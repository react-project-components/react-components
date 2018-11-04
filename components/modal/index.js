import Modal from './Modal';
import {confirmFactory} from './confirm';
import React from "react";

Modal.confirm = confirmFactory({
    title: '确认',
    style:{width:560}
})


Modal.alert = confirmFactory({
    title: '警告',
    showCancel: false,
    style:{width:560}
})


Modal.success = confirmFactory({
    title: '成功信息',
    showCancel: false,
    style:{width:560}
})

Modal.warning = Modal.warn = confirmFactory({
    title: '警告',
    showCancel: false,
    style:{width:560}
})


Modal.error = confirmFactory({
    title: '错误',
    showCancel: false,
    style:{width:560}
})

export default Modal;