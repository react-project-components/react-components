import React from 'react';
import '@component/button/theme.css';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='flex_center_v section'>
                    <button className='btn-primary'>Primary</button>
                    <button className='btn-primary-outline margin-left-sm'>Primary-outline</button>
                    <button className='btn-primary margin-left-sm btn-size-large'>Primary large</button>
                    <button className='btn-primary-outline margin-left-sm btn-size-middle'>Primary middle</button>
                </div>

                <div className='margin-top-md section'>
                    <div>
                        <label>disabled</label>
                    </div>
                    <div className='flex_center_v margin-top-sm'>
                        <button className='btn-primary' disabled>Primary disable</button>
                        <button className='btn-primary-outline margin-left-sm' disabled>Primary-outline disable</button>
                    </div>
                </div>
            </div>
        );
    }
}
