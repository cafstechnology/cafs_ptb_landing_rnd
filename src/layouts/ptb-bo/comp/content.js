import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from '../../../routes';
import NotFound from '../404';

const App = (props) => {
    return (
        <Switch>
            {routes.map((route, idx) => {
                return route.component ? (
                    <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={m => <route.component {...m}{...props}/>}
                    />
                ) : (null);
            })}
            <Route render={() => <NotFound />} />
        </Switch>
    );
}

export default App;