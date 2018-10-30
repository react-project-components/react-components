import './index.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Popover from '../popover';
import getPlacements from './getPlacements';

class ToolTip extends Component {
  static defaultProps = {
    placement: 'top',
    trigger: 'hover',
    visible: false,
    onVisibleChange: f => f
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible,
      placement: this.props.placement
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible !== this.state.visible) {
      this.setState({visible: nextProps.visible});
    }
  }

  onVisibleChange = (visible) => {
    this.setState({visible});
    if (visible === false) {
      this.setState({placement: this.props.placement});
    }
    this.props.onVisibleChange(visible);
  }

  getPlacements = (...rest) => {
    let positionCalRet = getPlacements(...rest);
    if (positionCalRet.placement !== this.state.placement) {
      this.setState({placement: positionCalRet.placement});
    }
    return positionCalRet;
  }

  render() {
    const props = this.props;
    const state = this.state;
    return (
      <Popover onVisibleChange={this.onVisibleChange} getPlacements={this.getPlacements} type={props.trigger}
               visible={state.visible}>
        <Popover.Trigger>
          {props.children}
        </Popover.Trigger>
        <Popover.Content
          placement={props.placement}
          className={`tooltip-wrapper tooltip-wrapper-${state.placement}`}
        >
          <div className="tooltip-content">{props.content}</div>
          <div className={`tooltip-arrow tooltip-arrow-${state.placement}`}></div>
        </Popover.Content>
      </Popover>
    )
  }
}

export default ToolTip;
