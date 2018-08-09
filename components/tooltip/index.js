import './theme.scss';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Popover from '../popover';

class ToolTip extends Component {
    static defaultProps = {
        placement: 'top'
    };

    render() {
        const props = this.props;
        return (
            <Popover>
                <Popover.Trigger>
                    {props.children}
                </Popover.Trigger>
                <Popover.Content
                    placement={props.placement}
                    className="tooltip-wrapper"
                    // delay={100}
                >
                    <div className="tooltip-arrow"></div>
                    <div className="tooltip-content">props.content</div>
                </Popover.Content>
            </Popover>
        )
    }
}

export default ToolTip;
