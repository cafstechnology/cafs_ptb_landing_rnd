import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './main';
import routes from '../../routes/public';

import './styles/main.scss';

const App = () => {
    return (
        <Router>
            <Switch>
                {routes.map((route, idx) => {
                    return route.component ? (
                        <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={m => <route.component {...m} />}
                        />
                    ) : (null);
                })}
                <Route render={m => <Main {...m} />} />
            </Switch>
        </Router>
    );
}

export default App;