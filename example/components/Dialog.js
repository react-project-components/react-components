import React from 'react';
import Dialog from '../../components/dialog';

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
        {label: "Cancel", onClick: this.handleToggle},
        {label: "Save", onClick: this.handleToggle}
    ];

    render() {
        return (
            <div>
                <button label='Show my dialog' onClick={this.handleToggle}>dialog</button>
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
