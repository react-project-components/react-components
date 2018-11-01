import React, {Component} from 'react';
import PropTypes from 'prop-types';
import kindOf from '../utils/kindOf';
import {getOffset} from '../utils/domUtils';
import getPlacements from './getPlacements';

class Popover extends Component {
  static defaultProps = {
    type: 'click',
    getPlacements: getPlacements,
    visible: false,
    onVisibleChange: f => f
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible,
    }
    this.eventListeners = {
      'trigger-hover': {
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave
      },
      'content-hover': {
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave
      },
      'trigger-click': {
        onClick: this.onClick
      },
      'content-click': {}
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.state.visible) {
      this.setPopupContentVisible(nextProps.visible);
    }
  }

  componentDidMount() {
    this.bindEventHandler();
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutside, true);
  }

  bindEventHandler = () => {
    const props = this.props;
    const state = this.state;

    if (state.visible) {
      window.addEventListener('click', this.onClickOutside, true);
    }

    // Ensure handler is removed even if autoClose is false
    if (!state.visible) {
      window.removeEventListener('click', this.onClickOutside, true);
    }
  }

  onClickOutside = (event) => {
    if (this.triggerRef.contains(event.target) || this.contentRef.contains(event.target)) {
      return;
    }
    this.setPopupContentVisible(false);
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

  delaySetPopupVisible = (popupVisible, delay) => {
    this.clearDelayTimer();

    if (delay) {
      this.delayTimer = setTimeout(() => {
        this.setPopupContentVisible(popupVisible);
        this.clearDelayTimer();
      }, delay);
    } else {
      this.setPopupContentVisible(popupVisible);
    }
  }

  clearDelayTimer = () => {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  }

  onMouseEnter = () => {
    this.delaySetPopupVisible(true);
  }

  onMouseLeave = () => {
    this.delaySetPopupVisible(false, 100);
  }

  onClick = (event) => {
    event.preventDefault();
    this.setPopupContentVisible(!this.state.visible);
  }

  setPopupContentVisible = (visible) => {
    this.setState({visible}, () => {
      this.bindEventHandler();
      this.props.onVisibleChange(this.state.visible);
    });
  }

  triggerRefFun = (r) => {
    this.triggerRef = r;
  }

  contentRefFun = (r) => {
    this.contentRef = r;
  }

  getContentPositionFun = (contentBoundingBox, placement) => {
    const triggerBoundingBox = this.triggerRef.getBoundingClientRect();
    return this.props.getPlacements(triggerBoundingBox, contentBoundingBox, placement)
  }

  render() {
    const {trigger, content} = this.validateChildren();

    const props = this.props;
    const state = this.state;

    return [
      React.cloneElement(trigger, {
        key: 'trigger',
        triggerRef: this.triggerRefFun,
        eventListeners: this.eventListeners[`trigger-${props.type}`]
      }),
      React.cloneElement(content, {
        key: 'content',
        visible: state.visible,
        contentRef: this.contentRefFun,
        getContentPositionFun: this.getContentPositionFun,
        eventListeners: this.eventListeners[`content-${props.type}`]
      })
    ]
  }
}

export default Popover;
