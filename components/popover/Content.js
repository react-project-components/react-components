import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ActivableRenderer from '../hoc/ActivableRenderer';
import classnames from 'classnames';


class Content extends Component {
    static defaultProps = {
        className: 'popover-content',
        placement: 'bottom',
        autoAlign: false
    }

    constructor(props) {
        super(props);
        this.state = {};

        this.oldWidth = -9999;
        this.oldHeight = -9999;
    }

    componentDidUpdate() {
        if (this.props.autoAlign) {
            this.reAlign(this);
        }
    }

    contentRef = ref => {
        if (!ref) return;
        this.reAlign(ref);
        this.props.contentRef(ref);
    }

    reAlign = (ref) => {
        let thisDom = ReactDOM.findDOMNode(ref);
        let boundingBox = thisDom.getBoundingClientRect();
        if(Math.abs(this.oldWidth - boundingBox.width) < 1 && Math.abs(this.oldHeight - boundingBox.height) < 1){
            return;
        }
        this.oldWidth = boundingBox.width;
        this.oldHeight = boundingBox.height;
        let position = this.props.getContentPositionFun(boundingBox, this.props.placement);
        thisDom.style.position = 'absolute';
        thisDom.style.top = position.top + 'px';
        thisDom.style.left = position.left + 'px';
    }


    render() {
        const props = this.props;

        const className = classnames(props.className, {'active': props.visible});

        return (
            ReactDOM.createPortal(
                <div
                    ref={this.contentRef}
                    className={className}
                    {...props.eventListeners}>
                    {
                        props.children
                    }
                </div>,
                document.body
            )
        )
    }
}

export default ActivableRenderer()(Content);
