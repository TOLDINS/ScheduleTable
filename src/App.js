import React from 'react';
import Shedule from './Cell';
import './index.css'
import Cell from './Cell'
import Change_kafedra_day from './Change_kafedra_day'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
     <BrowserRouter>
    <Switch>
    <Route path={"/cafedra/:kaf/:day"}  component={Cell}  />
    <Route path={"/"}  component={Change_kafedra_day} />

    </Switch>
    </BrowserRouter>

    
  

  );
}

export default App;
