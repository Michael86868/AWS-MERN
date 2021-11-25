import './App.css';
import React from 'react'
import Main from "./Page/Main";
import AddMaterial from './Page/AddMaterial';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Menu from './Component/Menu';
import Footer from './Component/Footer';

const App = () => {
  return (
    <BrowserRouter>
    <Menu />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/add-material" component={AddMaterial} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;