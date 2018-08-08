import React from 'react';
import ToolTip from '../../components/tooltip';
import '../../components/button.scss';

export default class ToolTipTest extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <ToolTip content="hello !!!!!">
                <span className='btn-primary'>ToolTip string</span>
            </ToolTip>
        );
    }
}
