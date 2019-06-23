import React from 'react';
import './app.css';
import axios from 'axios';
import Posts from './../posts';
import Pagination from '../pagination';

class App extends React.Component {

  constructor () {
    super();
    this.paginate = this.paginate.bind(this);
  }

  state = {
    posts: [],
    currentPosts: [],
    isLoading: false,
    currentPage: 1,
    currentPostIndex: 0,
    postsPerPage: 6
  };

  getCurrentPosts () {
    const startCount = this.state.currentPostIndex;
    const endCount = this.state.currentPage * this.state.postsPerPage;
    const currentPosts = this.state.posts.slice(startCount, endCount);

    this.setState({ currentPosts });
  };

  paginate (index) {
    this.setState({ currentPage: index }, () => {
      const { currentPage, postsPerPage } = this.state;
      const currentPostIndex = (currentPage * postsPerPage) - postsPerPage;

      this.setState({ currentPostIndex }, () => {
        this.getCurrentPosts();
      });
    });
  }

  componentWillMount () {
    this.setState({ isLoading: true });
    
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
        this.setState({ isLoading: false });

        this.getCurrentPosts();
      });
  }

  render () {
    const totalPages = Math.ceil(this.state.posts.length / this.state.postsPerPage);
    
    let postsDom = (
      <React.Fragment>
        <Posts posts={ this.state.currentPosts } />
        
        <Pagination totalPages={ totalPages } paginate={ this.paginate } currentPage={ this.state.currentPage } />
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
