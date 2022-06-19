import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {HashRouter as Router ,Switch,Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Donate from './components/pages/Donate';
import Contact from './components/pages/Contact';


function App() {
  return (
    <div className='App'>
     
     <Router>
     
     <Navbar/>
     <Switch>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/donate'><Donate/></Route>
        <Route exact path='/contact'><Contact/></Route>
     
     </Switch>
     </Router>
    </div>
  );
}

export default App;