import React from 'react';
function Post(props) {
  const { post } = props;
  return (
    <ul>
      <li>Title: {post.title}</li>
      {Object.keys(post.date).map((key) => (
        <li>{post.date[key]}</li>
      ))}
    </ul>
  );
}

export default Post;
