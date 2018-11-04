import React, {Component} from 'react';
import classnames from 'classnames';
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

        const className = classnames('rc-popover-trigger',props.className);

        return (
            <div
                ref={props.triggerRef}
                className={className}
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
