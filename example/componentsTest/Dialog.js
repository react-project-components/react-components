import React from 'react';
import {Dialog} from '@component';

export default class DialogTest extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        visible: false
    };

    handleToggle = () => {
        this.setState({visible: !this.state.visible});
    }

    actions = [
        {label: "确定", onClick: this.handleToggle},
        {label: "取消", onClick: this.handleToggle},
    ];

    render() {
        return (
            <div>
                <button className='btn-primary' onClick={this.handleToggle}>open dialog</button>
                <Dialog
                    actions={this.actions}
                    visible={this.state.visible}
                    onEscKeyDown={this.handleToggle}
                    onOverlayClick={this.handleToggle}
                    title='My awesome dialog'>
                    <p>Here you can add arbitrary content. Components like Pickers are using dialogs now.</p>
                </Dialog>
            </div>
        );
    }
}
