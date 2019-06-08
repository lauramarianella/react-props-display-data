import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import { subreddits } from './data.jsx';
import Subreddit from './Subreddit.jsx';

function App(props) {
  return (
    <div>
      {subreddits.map((subreddit) => (
        <Subreddit mySubreddit={subreddit} />
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
