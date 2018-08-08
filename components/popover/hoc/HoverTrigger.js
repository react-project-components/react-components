import React, {Component} from 'react';
import PropTypes from 'prop-types';


const HoverTriggerHoc = (Comp) => {
    return class HoverTrigger extends Component {
        static defaultProps = {};

        delaySetPopupVisible = (popupVisible, delay) => {
            this.clearDelayTimer();

            if (delay) {
                this.delayTimer = setTimeout(() => {
                    this.props.open();
                    this.clearDelayTimer();
                }, delay);
            } else {
                this.close();
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

        render() {
            const props = this.props;
            return (
                <Comp
                    {...props}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                />
            )
        }
    }
};

export default HoverTriggerHoc;
