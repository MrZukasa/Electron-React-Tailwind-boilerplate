import React from 'react';
import Create from './Create';
import Navbar from './Navbar';
import Footer from './Footer';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  
  return (
    <Router>
      <div className="App" class="flex flex-col h-screen">
        <Navbar/>        
          <Switch>
            <Route path="/">
              <Create/>
            </Route>            
          </Switch>        
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
