import React from 'react';
import {Tooltip} from '@component';

export default class ToolTipTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    }
  }

  manualClose = (visible) => {
    this.setState({visible: false});
  }

  onVisibleChange = (visible) => {
    // console.log('visible  ', visible);
    // this.setState({visible});
  }

  render() {
    const content = (
      <ul>
        <li>data1</li>
        <li>data1</li>
        <li>data1</li>
        <li>data1</li>
      </ul>
    )
    return (
      <div>
        <div className='margin-top-bg'>
          <Tooltip content={content}>
            <span className='btn-primary'>Tooltip top</span>
          </Tooltip>
        </div>

        <div className='margin-top-bg'>
          <Tooltip content={<div>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
              any content! include react componet<br/>
          </div>} placement={'right'}>
            <span className='btn-primary'>Tooltip right</span>
          </Tooltip>
        </div>

        <div className='margin-top-bg'>
          <Tooltip content={content} placement={'bottom'}>
            <span className='btn-primary'>Tooltip bottom</span>
          </Tooltip>
        </div>

        <div className='margin-top-bg'>
          <Tooltip content="hello !!!!!" placement={'left'}>
            <span className='btn-primary'>Tooltip left</span>
          </Tooltip>
        </div>


        <div className='margin-top-bg'>
          <Tooltip onVisibleChange={this.onVisibleChange} visible={this.state.visible}
                   content={<div>
                       any content! include react componetany content! include react componetany content! include react componetany content! include react componetany content! include react componet<br/>
                       any content! include react componet<br/>
                       any content! include react componet<br/>
                       any content! include react componet<br/>
                       <button className='btn-size-middle' onClick={this.manualClose}>close</button>
                   </div>}
                   trigger='click'>
            <span className='btn-primary'>Tooltip click</span>
          </Tooltip>
        </div>
      </div>

    );
  }
}
