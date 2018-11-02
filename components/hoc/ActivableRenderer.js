import React, {Component} from 'react';
import PropTypes from 'prop-types';

const ActivableRendererFactory = (options = {delay: 500}) =>
    ActivableComponent => class ActivableRenderer extends Component {
        static propTypes = {
            visible: PropTypes.bool,
            children: PropTypes.node,
            delay: PropTypes.number,
        };

        static defaultProps = {
            delay: options.delay,
            visible: false,
        }

        constructor(props) {
            super(props);
            this.state = {
                visible: this.props.visible,
                rendered: this.props.visible,
            };
        }

        componentWillReceiveProps(nextProps) {
            if (nextProps.visible && !this.props.visible) this.renderAndActivate();
            if (!nextProps.visible && this.props.visible) this.deactivateAndUnrender();
        }

        componentWillUnmount() {
            clearTimeout(this.activateTimeout);
            clearTimeout(this.unrenderTimeout);
        }

        renderAndActivate() {
            if (this.unrenderTimeout) clearTimeout(this.unrenderTimeout);
            this.setState({rendered: true, visible: false}, () => {
                this.activateTimeout = setTimeout(() => this.setState({visible: true}), 0);
            });
        }

        deactivateAndUnrender() {
            this.setState({rendered: true, visible: false}, () => {
                this.unrenderTimeout = setTimeout(() => {
                    this.setState({rendered: false});
                    this.unrenderTimeout = null;
                }, this.props.delay);
            });
        }

        render() {
            const {delay, ...others} = this.props; // eslint-disable-line no-unused-vars
            const {visible, rendered} = this.state;
            return rendered
                ? <ActivableComponent {...others} visible={visible}/>
                : null;
        }
    };

export default ActivableRendererFactory;
