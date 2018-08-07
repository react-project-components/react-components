import React, {Component} from 'react';
import PropTypes from 'prop-types';
import kindOf from '../utils/kindOf';
import {getOffset} from '../utils/domUtils';


class Popover extends Component {
    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    validateChildren = () => {
        const {children} = this.props;
        const childArray = React.Children.toArray(children);

        if (childArray.length !== 2) {
            throw new Error(
                'There must be one and only one trigger and content in Popover',
            );
        }

        let trigger = childArray[0];
        let content = childArray[1];

        return {trigger, content};
    }

    open = () => {
        console.log('open')
        this.setState({visible: true});
    };

    close = () => {
        console.log('close')
        this.setState({visible: false});
    };

    triggerRef = (r) => {
        this.triggerRef = r;
    }

    getTriggerPosition = () => {
        const box = this.triggerRef.getBoundingClientRect();

        return {
            x: box.top + window.pageYOffset - document.documentElement.clientTop,
            y: box.left + window.pageXOffset - document.documentElement.clientLeft,
            height: box.height,
            width: box.width
        }
    }


    render() {
        const {trigger, content} = this.validateChildren();

        const {type} = this.props;
        const state = this.state;

        return [
            React.cloneElement(trigger, {
                key: 'trigger',
                type,
                triggerRef: this.triggerRef,
                open: this.open,
                close: this.close
            }),
            React.cloneElement(content, {
                key: 'content',
                visible: state.visible,
                getTriggerPosition:this.getTriggerPosition
            })
        ]
    }
}

export default Popover;
