import React, {lazy} from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {Route} from 'react-router-dom'
import MainLayout from './layout/MainLayout';
import RouteConfig from './layout/routeConfig';

class App extends React.Component {
    render() {
        return (
            <div>
                <MainLayout>
                    {
                        RouteConfig.map((item, index) => {
                            return <Route key={index} exact path={`/${item.routeTxt}`} component={item.component}/>
                        })
                    }
                </MainLayout>
            </div>
        )
    }
}

// import('./utils/dom').then(res => {
//     console.log(' res ',res);
// })

ReactDOM.render(<App/>, document.getElementById('root'));
