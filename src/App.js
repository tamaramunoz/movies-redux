import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

const App = ({ store }) => (
  <Provider>
    <Router>
      <div>
        hili
        <Route />
      </div>
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
