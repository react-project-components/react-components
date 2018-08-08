import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Popover from '../popover';

class ToolTip extends Component {
    static defaultProps = {};


    render() {
        const props = this.props;
        return (
            <Popover>
                <Popover.Trigger>
                    {props.children}
                </Popover.Trigger>
                <Popover.Content>
                    {
                        props.content
                    }
                </Popover.Content>
            </Popover>
        )
    }
}

export default ToolTip;
