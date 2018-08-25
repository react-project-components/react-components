import React from 'react';
import './Nav.css';
import {NavLink} from "react-router-dom";

const NAV_CONFIG = [
    {
        to: '/dialog',
        text: 'dialog'
    },
    {
        to: '/tooltip',
        text: 'tooltip'
    },
]

export default class ReactClass extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav>
                <h2 className='text-center padding-sm'>组件</h2>
                <ul className='flex-direction-column'>
                    {
                        NAV_CONFIG.map(value=>{
                            return (
                                <li key={value.text}>
                                    <NavLink className='nav-item' to={value.to} activeClassName='active'>{value.text}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        );
    }
}
