import React from 'react';
import Nav from './Nav';
import Header from './Header';
import {BrowserRouter, Route, StaticRouter, NavLink, Switch} from "react-router-dom";
import './MainLayout.css';

export default class MainLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <div className='flex'>
                        <Nav/>
                        <main className='flex1 padding-left-md padding-top-md'>
                            {this.props.children}
                        </main>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
