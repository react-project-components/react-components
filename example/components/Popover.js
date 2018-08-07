import React from 'react';
import Popover from '../../components/popover';
import '../../components/button.scss';

export default class PopoverTest extends React.Component {
    state = {
        active: false
    };


    render() {
        return (
            <div>
                <Popover>
                    <Popover.Trigger>
                        <span className='btn-primary'>test string</span>
                    </Popover.Trigger>

                    <Popover.Content>
                        <span>content</span>
                    </Popover.Content>
                </Popover>
            </div>
        );
    }
}
