import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NavLayout from './Containers/NavLayout/NavLayout';
import Home from './Containers/Home/Home';
import Source from './Containers/Source/Source';

class App extends Component {
  render() {
    return (
      <div>
        <NavLayout>
          <Switch>
            <Route path="/sources/:id" component={Source} />
            <Route path="/home" component={Home} />
            <Route path="/" render={() => (
              <Redirect to="/home" />
            )} />
          </Switch>
        </NavLayout>
      </div>
    );
  }
}

export default App;
