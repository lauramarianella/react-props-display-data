import React from 'react';
import Modeator from './Moderator.jsx';
import Post from './Post.jsx';

function Subreddit(props) {
  const { mySubreddit } = props;
  return (
    <div className="profile-card">
      <h1>{mySubreddit.name}</h1>
      {mySubreddit.moderators.map((moderator) => (
        <Modeator moderator={moderator} />
      ))}
      Posts:
      {mySubreddit.posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}

export default Subreddit;
