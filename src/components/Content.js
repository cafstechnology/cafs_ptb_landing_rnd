import React from 'react';

const App = ({ children, className }) => {
    const classes = ['app-content'];
    if (className) classes.push(className);

    return (
        <div className={classes.join(' ')}>
            {children}
        </div >
    );
}

export default App;