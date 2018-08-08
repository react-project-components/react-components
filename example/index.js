import React from 'react';
import ReactDOM from 'react-dom';
// import './style/index.css';
import Dialog from './components/Dialog';
import Popover from './components/Popover';
import ToolTip from './components/ToolTip';


ReactDOM.render(
    <div>
        <Dialog/>
        <Popover/>
        <ToolTip/>
    </div>,
    document.getElementById('root'));
