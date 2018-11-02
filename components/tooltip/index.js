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
            placement: this.props.placement,
            gapStyle: {} //箭头的style
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible !== this.state.visible) {
            this.setState({visible: nextProps.visible});
        }
    }

    onVisibleChange = (visible) => {
        this.setState({visible});
        this.props.onVisibleChange(visible);
    }

    getPlacements = (...rest) => {
        let positionCalRet = getPlacements(...rest);

        if (positionCalRet.placement !== this.state.placement) {
            this.setState({placement: positionCalRet.placement});
        }
        if (positionCalRet.offsetX !== 0 || positionCalRet.offsetY !== 0) {
            this.setState({
                gapStyle: {
                    "position": 'relative',
                    "top": `${positionCalRet.offsetY}px`,
                    "left": `${positionCalRet.offsetX}px`,
                }
            });
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
                    delay={100}
                >
                    <div className="tooltip-content">{props.content}</div>
                    <div style={state.gapStyle} className={`tooltip-arrow tooltip-arrow-${state.placement}`}></div>
                </Popover.Content>
            </Popover>
        )
    }
}

export default ToolTip;
