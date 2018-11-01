import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ActivableRenderer from '../hoc/ActivableRenderer';
import classnames from 'classnames';


class Content extends Component {
    static defaultProps = {
        getTiggerPostion: f => f,
        setPopupContentVisible: f => f,
        className: 'popover-content',
        placement: 'bottom',
    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    // componentDidMount() {
    //     let thisDom = ReactDOM.findDOMNode(this);
    //     this.setState({contentBoundingBox: thisDom.getBoundingClientRect()});
    // }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    contentRef = ref => {
        if (!ref) return;
        let thisDom = ReactDOM.findDOMNode(ref);


        console.log(' thisDom.getBoundingClientRect() ',thisDom.getBoundingClientRect());


        let position = this.props.getContentPositionFun(thisDom.getBoundingClientRect(), this.props.placement);
        thisDom.style.position = 'absolute';
        thisDom.style.top = position.top + 'px';
        thisDom.style.left = position.left + 'px';
        this.props.contentRef(ref);
    }

    render() {
        const props = this.props;
        const state = this.state;

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
