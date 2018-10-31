import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout';

import Dialog from './components/Dialog';
import Popover from './components/Popover';
import ToolTip from './components/ToolTip';
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import Pagination from "./components/Pagination";
import DatePickerTest from "./components/DatePicker";

class App extends React.Component {
    render() {
        return (
            <div>
                <MainLayout>
                    <Route exact path="/" component={Button}/>
                    <Route exact path="/dialog" component={Dialog}/>
                    <Route exact path="/button" component={Button}/>
                    <Route exact path="/popover" component={Popover}/>
                    <Route exact path="/tooltip" component={ToolTip}/>
                    <Route exact path="/checkbox" component={Checkbox}/>
                    <Route exact path="/pagination" component={Pagination}/>
                    <Route exact path="/datepicker" component={DatePickerTest}/>
                </MainLayout>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
