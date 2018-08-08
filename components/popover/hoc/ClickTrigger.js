import React, {Component} from 'react';
import PropTypes from 'prop-types';


const ClickTriggerHoc = (Comp) => {
    return class HoverTrigger extends Component {

        static defaultProps = {};

        componentDidMount(){
            window.addEventListener('click',this.windowClickHandler,true);
        }

        componentWillUnmount(){
            window.removeEventListener('click',this.windowClickHandler,true)
        }

        windowClickHandler = (event) => {

        }

        onClick = (event) => {
            event.preventDefault();
            this.props.visible ? this.props.close() : this.props.open();
        }

        render() {
            const props = this.props;
            return (
                <Comp
                    {...props}
                    onClick={this.onClick}
                />
            )
        }

    }
};

export default ClickTriggerHoc;
