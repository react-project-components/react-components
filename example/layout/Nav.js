import React from 'react';
import './Nav.css';
import {NavLink} from "react-router-dom";
import RouteConfig from './routeConfig';


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
              RouteConfig.map((value,index) => {
              return (
                <li key={index}>
                  <NavLink className='nav-item' to={`/${value.routeTxt}`} activeClassName='visible'>{value.routeTxt}</NavLink>
                </li>
              )
            })
          }
        </ul>
      </nav>
    );
  }
}
