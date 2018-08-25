import React from 'react';
import ToolTip from '../../components/tooltip';
import '../../components/button.css';

export default class ToolTipTest extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div style={{margin:30}}>
                    <ToolTip content="hello !!!!!" >
                        <span className='btn-primary'>ToolTip string</span>
                    </ToolTip>
                </div>

                <div style={{margin:30}}>
                    <ToolTip content="hello !!!!!" placement={'right'}>
                        <span className='btn-primary'>ToolTip string</span>
                    </ToolTip>
                </div>

                <div style={{margin:30}}>
                    <ToolTip content="hello !!!!!" placement={'bottom'}>
                        <span className='btn-primary'>ToolTip string</span>
                    </ToolTip>
                </div>

                <div style={{margin:30}}>
                    <ToolTip content="hello !!!!!" placement={'left'}>
                        <span className='btn-primary'>ToolTip string</span>
                    </ToolTip>
                </div>
            </div>

        );
    }
}
