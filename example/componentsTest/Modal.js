import React from 'react';
import {Modal} from '@component';

export default class DialogTest extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        visible: false
    };

    onOk = () => {
        Modal.alert({
            onOk: () => {
                console.log('alert')
            },
            content: '警告信息，任意react node'
        })
        this.setState({visible: true});
    }

    handleToggle = () => {
        this.setState({visible: true});
    }

    onCancel = () => {
        this.setState({visible: false});
    }

    confirm = () => {
        Modal.confirm({
            onOk: () => {
                console.log('confirm')
            },
            content: '确认，任意react node'
        })
    }

    alert = () => {
        Modal.alert({
            onOk: () => {
                console.log('alert')
            },
            content: '警告信息，任意react node'
        })
    }

    render() {
        return (
            <div>
                <button className='btn-primary' onClick={this.handleToggle}>open dialog</button>
                <Modal
                    onOk={this.onOk}
                    onCancel={this.onCancel}
                    okText='打开另一个modal'
                    visible={this.state.visible}
                    title='My awesome dialog'>
                    <p>Here you can add arbitrary content. Components like Pickers are using dialogs now.</p>
                </Modal>
                <div>
                    <div className='margin-vertical-md'>快捷方法 Modal.confirm()</div>
                    <button className='btn-primary' onClick={this.confirm}>confirm</button>
                </div>
                <div>
                    <div className='margin-vertical-md'>快捷方法 Modal.alert()</div>
                    <button className='btn-primary' onClick={this.alert}>alert</button>
                </div>
            </div>
        );
    }
}
