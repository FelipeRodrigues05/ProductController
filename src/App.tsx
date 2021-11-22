import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ProductListComponent from './components/ProductListComponent';
import NewProductComponent from './components/NewProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';

function App() {
  return (
    <div> 
      <Router>
        
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" exact component={ProductListComponent}/>
              <Route path="/products" component={ProductListComponent}/>
              <Route path="/add-product" component={NewProductComponent}/>
              <Route path="/update-product/:id" component={UpdateProductComponent}/>
            </Switch>
          </div>
          <FooterComponent />

      </Router>
    </div>
  );
}

export default App;
