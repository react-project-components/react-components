import React from 'react';

import './index.css';

export default class Pagination extends React.Component {
    static defaultProps = {
        current: 0,
        total: 0
    }

    constructor(props) {
        super(props);
        this.state = {
            current : 1,
            total: 1,
        }
    }

    // 找到离当前页数 最近的5个数字
    findThree = () => {
        const {current,total} = this.props;
        let ret = [current];
        let indexArr = [-1,1,-2,2,-3,3,-4,4];
        for(var i = 0 ; i< indexArr.length ;i++){
            let tobeAdd = current + indexArr[i];
            if(tobeAdd >= 1 && tobeAdd <= total && ret.length !== 5){
                indexArr[i] > 0 ? ret.push(tobeAdd) : ret.unshift(tobeAdd);
            }
        }

        return ret;
    }

    render() {
        const props = this.props;
        const three = this.findThree();
        return (
            <div className='rc-pagination'>
                <ul>
                    <li>{'<'}</li>
                    {
                        three[0] !== 1 && <li>1</li>
                    }
                    {
                        three[0] > 2 && <li>···</li>
                    }
                    {
                        three.map(item => {
                            return (
                                <li key={item}>{item}</li>
                            )
                        })
                    }
                    {
                        three[three.length-1] < props.total - 1 && <li>···</li>
                    }
                    {
                        three[three.length-1] !== props.total && <li>{props.total}</li>
                    }
                    <li>{'>'}</li>
                </ul>
            </div>
        );
    }
}
