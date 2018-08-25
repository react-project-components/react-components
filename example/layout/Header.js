import React from 'react';
import './Header.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className='flex_center_v padding-left-md'>
                <img style={{width: 50}} src={require('../assets/logo.png')} alt='logo'/>
            </header>
        );
    }
}
