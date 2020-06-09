import React from 'react';
import Shedule from './Cell';
import './index.css'
import Cell from './Cell'
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
    <Route path={"/:kaf/:day"}  component={Cell}  />
    
    </Switch>
    </BrowserRouter>

    
  

  );
}

export default App;
