import './index.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Popover from '../popover';
import getPlacements from './getPlacements';

class ToolTip extends Component {
    static defaultProps = {
        placement: 'top'
    };

    render() {
        const props = this.props;
        return (
            <Popover getPlacements={getPlacements} type='hover'>
                <Popover.Trigger>
                    {props.children}
                </Popover.Trigger>
                <Popover.Content
                    placement={props.placement}
                    className={`tooltip-wrapper tooltip-wrapper-${props.placement}`}
                    delay={100}
                >
                    <div className="tooltip-content">props.content</div>
                    <div className={`tooltip-arrow tooltip-arrow-${props.placement}`}></div>
                </Popover.Content>
            </Popover>
        )
    }
}

export default ToolTip;
