import React from 'react';
import './app.css';
import axios from 'axios';
import Posts from './../posts';

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
    
    return (
      <div className="app">
        <h2>All Posts</h2>

        { this.state.isLoading ? 'Loading Posts...' : <Posts posts={ this.state.posts } /> }
      </div>
    );
  };
}

export default App;
