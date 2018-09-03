import React from 'react';
import ToolTip from '../../components/tooltip';

export default class ToolTipTest extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='margin-top-bg'>
                    <ToolTip content="hello !!!!!" >
                        <span className='btn-primary'>ToolTip top</span>
                    </ToolTip>
                </div>

                <div className='margin-top-bg'>
                    <ToolTip content="any content! include react componet" placement={'right'}>
                        <span className='btn-primary'>ToolTip right</span>
                    </ToolTip>
                </div>

                <div className='margin-top-bg'>
                    <ToolTip content="hello !!!!!" placement={'bottom'}>
                        <span className='btn-primary'>ToolTip bottom</span>
                    </ToolTip>
                </div>

                <div className='margin-top-bg'>
                    <ToolTip content="hello !!!!!" placement={'left'}>
                        <span className='btn-primary'>ToolTip left</span>
                    </ToolTip>
                </div>


                <div className='margin-top-bg'>
                    <ToolTip content='click' trigger='click'>
                        <span className='btn-primary'>ToolTip click</span>
                    </ToolTip>
                </div>
            </div>

        );
    }
}
