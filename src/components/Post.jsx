import React from 'react';
import POSTS from "../components/Utils/Post.json"

function Post() {
    return (
        <div>
            {POSTS.map((post) => (
                <div>
                    <h2>{post.title}</h2> <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default Post;
