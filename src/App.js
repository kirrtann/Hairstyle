import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createStore from './store';
import TheUsual from './containers/Usual';

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={TheUsual} />
      </Router>
    </Provider>
  );
}

export default App;
