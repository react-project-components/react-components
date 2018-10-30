import React from 'react';
import ToolTip from '../../components/tooltip';

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
          <ToolTip content={content}>
            <span className='btn-primary'>ToolTip top</span>
          </ToolTip>
        </div>

        <div className='margin-top-bg'>
          <ToolTip content={<div>
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
            <span className='btn-primary'>ToolTip right</span>
          </ToolTip>
        </div>

        <div className='margin-top-bg'>
          <ToolTip content={content} placement={'bottom'}>
            <span className='btn-primary'>ToolTip bottom</span>
          </ToolTip>
        </div>

        <div className='margin-top-bg'>
          <ToolTip content="hello !!!!!" placement={'left'}>
            <span className='btn-primary'>ToolTip left</span>
          </ToolTip>
        </div>


        <div className='margin-top-bg'>
          <ToolTip onVisibleChange={this.onVisibleChange} visible={this.state.visible}
                   content={<div>
                       any content! include react componetany content! include react componetany content! include react componetany content! include react componetany content! include react componet<br/>
                       any content! include react componet<br/>
                       any content! include react componet<br/>
                       any content! include react componet<br/>
                       <button className='btn-size-middle' onClick={this.manualClose}>close</button>
                   </div>}
                   trigger='click'>
            <span className='btn-primary'>ToolTip click</span>
          </ToolTip>
        </div>
      </div>

    );
  }
}
