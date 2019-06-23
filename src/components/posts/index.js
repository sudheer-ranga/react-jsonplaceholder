import React from 'react';
import { Link } from 'react-router-dom';
import './posts.css';

const Posts = (props) => {
    let { posts } = props;
    
    let allPosts = posts.map((post) => {
        return (
            
            <div className="row mb-2" key={post.id}>
                <div className="col-md-12">
                    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-0"><Link to={`/posts/${post.id}`}>{ post.title }</Link></h3>
                            <p className="card-text mb-auto">{ post.body }</p>
                            <Link to={`/posts/${post.id}`} className="stretched-link">Continue reading</Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em" dx="-2em">Thumbnail</text></svg>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    let postDom = allPosts.length > 0 ? (<React.Fragment>
        <h3 className="pb-4 mb-4 font-italic border-bottom">All Posts</h3>
        { allPosts }
        </React.Fragment>) : 'No Posts';

    return postDom;
}

export default Posts;
