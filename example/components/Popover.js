import React from 'react';
import Popover from '../../components/popover';
import '../../components/button.scss';

export default class PopoverTest extends React.Component {
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
                <Popover>
                    <Popover.Trigger>
                        <span className='btn-primary'>test string</span>
                    </Popover.Trigger>

                    <Popover.Content>
                        <div>
                            <span>content</span>
                        </div>
                    </Popover.Content>
                </Popover>
            </div>
        );
    }
}
