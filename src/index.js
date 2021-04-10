import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import PageLoading from './components/PageLoading';

const PageLayout = React.lazy(() => import('./layouts/ptb-bo'));

const App = () => (
  <Provider store={store}>
    <React.Suspense fallback={<PageLoading />}>
      <PageLayout />
    </React.Suspense>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));
