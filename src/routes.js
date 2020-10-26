import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import components
import Auth from './Components/Auth/Auth';
import Dash from './Components/Dash/Dash';
import Profile from './Components/Profile/Profile';
import EditPost from './Components/EditPost/EditPost';

export default (
  <Switch>
    <Route exact path='/' component={Auth} />
    <Route path='/dash' component={Dash} />
    <Route path='/profile' component={Profile} />
    <Route path='/edit' component={EditPost} />
  </Switch>
)