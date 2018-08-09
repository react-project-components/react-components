import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Trigger extends Component {
    static defaultProps = {
        type: 'hover',
        triggerRef: f => f
    };

    constructor(props) {
        super(props);
        this.state = {}

    }

    render() {
        const props = this.props;

        return (
            <div
                ref={props.triggerRef}
                className='rc-popover-trigger'
                {...props.eventListeners}
            >
                {
                    props.children
                }
            </div>
        );
    }
}

export default Trigger;
