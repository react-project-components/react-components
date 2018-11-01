import React from 'react';

export default class Pagination extends React.Component {
  static defaultProps = {
    current: 1,
    total: 1,
    className: '',
    onChangePage: f => f
  }

  constructor(props) {
    super(props);
    this.state = {
      current: props.current,
      total: 1,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.current !== this.state.current) {
      this.setState({current: nextProps.current});
    }
  }


  // 找到离当前页数 最近的5个数字
  findThree = () => {
    const {total} = this.props;
    const {current} = this.state;
    let ret = [current];
    let indexArr = [-1, 1, -2, 2, -3, 3, -4, 4];
    for (var i = 0; i < indexArr.length; i++) {
      let tobeAdd = current + indexArr[i];
      if (tobeAdd >= 1 && tobeAdd <= total && ret.length !== 5) {
        indexArr[i] > 0 ? ret.push(tobeAdd) : ret.unshift(tobeAdd);
      }
    }

    return ret;
  }

  onChangePage = (current) => () => {
    this.setState({current});
    this.props.onChangePage(current);
  }

  prePage = () => {
    const {current} = this.state;
    if (current === 1) {
      return;
    }
    this.onChangePage(current - 1)();
  }

  nextPage = () => {
    const {current} = this.state;
    if (current === this.props.total) {
      return;
    }
    this.onChangePage(current + 1)();
  }

  render() {
    const props = this.props;
    const {current} = this.state;
    const three = this.findThree();
    return (
      <div className={`rc-pagination ${props.className}`}>
        <ul className='pager-container'>
          <li onClick={this.prePage} className='pre'></li>
          {
            three[0] !== 1 && <li onClick={this.onChangePage(1)} className={current === 1 ? 'active' : ''}>1</li>
          }
          {
            three[0] > 2 && <li className='dots'>···</li>
          }
          {
            three.map(item => {
              return (
                <li key={item} onClick={this.onChangePage(item)}
                    className={current === item ? 'active' : ''}>{item}</li>
              )
            })
          }
          {
            three[three.length - 1] < props.total - 1 && <li className='dots'>···</li>
          }
          {
            three[three.length - 1] !== props.total && <li onClick={this.onChangePage(props.total)}
                                                           className={current === props.total ? 'active' : ''}>{props.total}</li>
          }
          <li onClick={this.nextPage} className='next'></li>
        </ul>
      </div>
    );
  }
}
