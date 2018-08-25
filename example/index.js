import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout';

import Dialog from './components/Dialog';
import Popover from './components/Popover';
import ToolTip from './components/ToolTip';

class App extends React.Component {
    render() {
        return (
            <div>
                <MainLayout>
                    <Route exact path="/dialog" component={Dialog}/>
                    <Route path="/popover" component={Popover}/>
                    <Route path="/tooltip" component={ToolTip}/>
                </MainLayout>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
