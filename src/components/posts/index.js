import React from 'react';
import { Link } from 'react-router-dom';
import './posts.css';

const Posts = (props) => {
    let { posts } = props;
    
    let allPosts = posts.map((post) => {
        return (
            <p key={post.id}>
                <Link to={`/posts/${post.id}`}>{ post.title }</Link>
            </p>
        );
    });

    return allPosts;
}

export default Posts;
