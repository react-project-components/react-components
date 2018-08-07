import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Trigger extends Component {
    static defaultProps = {
        type:'hover',
        triggerRef : f=>f
    };

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    onMouseEnter = () => {
        this.props.open();
    }

    onMouseLeave = () => {
        this.props.close();
    }

    render() {
        const props = this.props;

        return (
          <div
              ref={props.triggerRef}
              className='rc-popover-trigger'
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseLeave}
          >
              {
                  props.children
              }
          </div>
        );
    }
}

export default Trigger;
