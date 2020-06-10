import Shedule from './Cell';
import React, {Component, Fragment} from 'react';

import './../index.css'
import Cell from './Cell'
import Change_kafedra_day from './Change_kafedra_day'
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
  render(){
  return (
     <BrowserRouter>
    <Switch>
    <Route path={"/cafedra/:kaf/:day"}  component={Cell}  />
    <Route path={"/"}  component={Change_kafedra_day} />

    </Switch>
    </BrowserRouter>

    
  

  );
  }
}

export default App;
