import React from 'react';
import {Dialog} from '@component';

export default class DialogTest extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        active: false
    };

    handleToggle = () => {
        this.setState({active: !this.state.active});
    }

    actions = [
        {label: "取消", onClick: this.handleToggle},
        {label: "确定", onClick: this.handleToggle}
    ];

    render() {
        return (
            <div>
                <button className='btn-primary' onClick={this.handleToggle}>open dialog</button>
                <Dialog
                    actions={this.actions}
                    active={this.state.active}
                    onEscKeyDown={this.handleToggle}
                    onOverlayClick={this.handleToggle}
                    title='My awesome dialog'>
                    <p>Here you can add arbitrary content. Components like Pickers are using dialogs now.</p>
                </Dialog>
            </div>
        );
    }
}
