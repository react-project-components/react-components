import React from 'react';
import {Tooltip} from '@component';

export default class ToolTipTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            random:9,
        }
    }

    componentDidMount(){
        this.timerKey = setInterval(()=>{
            this.setState({
                random:Math.ceil(Math.random() * 20)
            });
        },1000)
    }

    manualClose = (visible) => {
        this.setState({visible: false});
    }

    onVisibleChange = (visible) => {
        this.setState({visible});
    }

    componentWillUnmount(){
        clearInterval(this.timerKey);
    }


    render() {
        const content = (
            <ul>
                <li>data1</li>
                <li>data1</li>
                <li>data1</li>
            </ul>
        )


        const dynamicContent = (
            <div>
                {
                    Array.from({length:this.state.random}).map((v, index) => {
                        return <div key={index}> dynamicContent {index}</div>
                    })
                }
            </div>
        )

        return (
            <div style={{width:500}}>
                <div className='flex_center_h'>
                    <div className='margin-top-bg'>
                        <Tooltip content={content}>
                            <span className='btn-primary'>Tooltip top</span>
                        </Tooltip>
                    </div>
                </div>

                <div className='flex-space-between'>

                    <div className='margin-top-bg'>
                        <Tooltip content="hello !!!!!" placement={'left'}>
                            <span className='btn-primary'>Tooltip left</span>
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


                </div>

                <div className='flex_center_h'>

                    <div className='margin-top-bg'>
                        <Tooltip content={content} placement={'bottom'}>
                            <span className='btn-primary'>Tooltip bottom</span>
                        </Tooltip>
                    </div>

                </div>


                <div className='margin-top-bg padding-top-lg'>
                    <Tooltip content='click outside to close'
                             trigger='click'>
                        <span className='btn-primary'>Tooltip click</span>
                    </Tooltip>
                </div>


                <div className='margin-top-bg padding-top-lg'>
                    <Tooltip onVisibleChange={this.onVisibleChange} visible={this.state.visible}
                             content={<div>
                                 any content! include react componet<br/>
                                 any content! include react componet<br/>
                                 any content! include react componet<br/>
                                 any content! include react componet<br/>
                                <div className='flex_center_h margin-top-md'>
                                    <button className='btn-primary-outline' onClick={this.manualClose}>close</button>
                                </div>
                             </div>}
                             trigger='click'>
                        <span className='btn-primary'>Tooltip 手动控制隐藏显示</span>
                    </Tooltip>
                </div>


                <div className='margin-top-bg'>
                    <Tooltip autoAlign={true} content={dynamicContent}>
                        <span className='btn-primary'>内容动态改变，自动重新定位</span>
                    </Tooltip>
                </div>

            </div>

        );
    }
}
