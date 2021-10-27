import './App.css';
import React from 'react'
import Main from "./pages/Main";
import AddMaterial from './pages/AddMaterial';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Menu from './components/Menu';

const App = () => {
  return (
    <BrowserRouter>
    <Menu />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/add-material" component={AddMaterial} />
      </Switch>
    </BrowserRouter>
  )
}

export default App