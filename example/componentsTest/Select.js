import React from 'react';
import {Popover} from '@component';
import './Popover.css';

export default class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contentVisible: false,
            country: ''
        }
    }

    onSelect = (value) => () => {
        this.setState({
            contentVisible: false,country:value
        });

    }

    render() {
        const state = this.state;
        return (
            <div className='popover-test'>
                <Popover  visible={state.contentVisible}>
                    <Popover.Trigger className='m-select'>
                        <input readOnly placeholder='country' value={state.country}></input>
                    </Popover.Trigger>

                    <Popover.Content>
                        <ul className='popover-test-content'>
                            <li onClick={this.onSelect('China')}>China</li>
                            <li onClick={this.onSelect('Japan')}>Japan</li>
                            <li onClick={this.onSelect('America')}>America</li>
                        </ul>
                    </Popover.Content>
                </Popover>
            </div>
        );
    }
}
