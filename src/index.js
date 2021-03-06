import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import App from './components/app';
import About from './components/about';
import Contact from './components/contact';
import Post from './components/post';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const routing = (
    <Router>
        <Header />
        
        <div className="container">
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/posts/:id" component={Post} />
        </div>
    </Router>
  )

  ReactDOM.render(routing, document.getElementById('root'))