import React from 'react';
import Popover from '../../components/popover';
import '../../components/button.css';

export default class PopoverTest extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Popover>
                <Popover.Trigger>
                    <span className='btn-primary'>test string</span>
                </Popover.Trigger>

                <Popover.Content>
                    <div style={{backgroundColor: 'red', height: 200, width: 100}}>content</div>
                </Popover.Content>
            </Popover>
        );
    }
}
