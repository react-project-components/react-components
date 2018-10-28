import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ActivableRenderer from '../hoc/ActivableRenderer';
import classnames from 'classnames';

const outOfWindowPosition = {
    position: 'absolute',
    x: -100000,
    y: -100000,
}

class Content extends Component {
    static defaultProps = {
        getTiggerPostion: f => f,
        setPopupContentVisible: f => f,
        className: 'popover-content',
        placement: 'bottom',
    }

    constructor(props) {
        super(props);
        this.state = {
            contentBoundingBox: null
        }
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
        if(!ref) return;
        let thisDom = ReactDOM.findDOMNode(ref);
        this.setState({contentBoundingBox: thisDom.getBoundingClientRect()});
        this.props.contentRef(ref);
    }

    render() {
        const props = this.props;
        const state = this.state;


        const className = classnames(props.className, {'active': props.active});


        console.log('   - - - - - - - - - ',className);

        let style = outOfWindowPosition;

        if (state.contentBoundingBox) {
            let position = props.getContentPositionFun(state.contentBoundingBox, props.placement);
            style = {
                position: 'absolute',
                ...position
            }
        }

        return (
            ReactDOM.createPortal(
                <div
                    ref={this.contentRef}
                    style={style}
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
