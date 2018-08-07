import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Content extends Component {
    static defaultProps = {
        getTiggerPostion: f => f
    };


    render() {
        const props = this.props;
        if (!props.visible) {
            return null;
        }
        let {x, y} = props.getTriggerPosition();
        return (
            <div style={{position: 'absolute', x: x, y: y}}>
                {
                    props.children
                }
            </div>
        )
    }
}

export default Content;
