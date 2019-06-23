import React from 'react';
import './app.css';
import axios from 'axios';
import Posts from './../posts';
import Pagination from '../pagination';

class App extends React.Component {

  state = {
    posts: [],
    isLoading: false
  };

  componentWillMount () {
    this.setState({ isLoading: true });
    
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
        this.setState({ isLoading: false });
      });
  }

  render () {
    let postsDom = (
      <React.Fragment>
        <Posts posts={ this.state.posts } />
        <Pagination />
      </React.Fragment>
    );
    
    return (
      <div className="app">
        { this.state.isLoading ? 'Loading Posts...' : postsDom }
      </div>
    );
  };
}

export default App;
