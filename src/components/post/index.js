import React from 'react';
import axios from 'axios';
import './post.css';

class Post extends React.Component {
    state = {
        isLoading: false,
        post: {}
    };

    componentWillMount () {
        this.setState({ isLoading: true });
        
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
        .then(res => {
            const post = res.data;
            this.setState({ post });
            this.setState({ isLoading: false });
        });
    }

    render () {
        const { post, isLoading } = this.state;
        const postDom = (
            <div className="post">
                <h2>{ post.title }</h2>
                <p>{ post.body }</p>
            </div>
        );
        
        return (
            isLoading ? 'Loading Post...' : postDom
        );
    };
}

export default Post;
