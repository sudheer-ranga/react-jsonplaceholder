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
            <React.Fragment>
                <h3 className="pb-4 mb-4 font-italic border-bottom text-center">Full Post</h3>
                <div className="row justify-content-center">
                    <div className="col-md-6 blog-main">
                        <div className="blog-main">
                            <h2 className="blog-title">{ post.title }</h2>
                            <p>{ post.body }</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
        
        return (
            isLoading ? 'Loading Post...' : postDom
        );
    };
}

export default Post;
