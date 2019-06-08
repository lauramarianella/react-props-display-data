import ReactDOM from 'react-dom';
import './main.css';
import React from 'react';
import DatingProfile from './DatingProfile.jsx';
import { datingProfiles } from './data.jsx';

function App(props) {
  return (
    <div>
      {datingProfiles.map((datingProfile) => (
        <DatingProfile
          key={`${datingProfile.name} ${datingProfile.gender}`}
          datingProfile={datingProfile}
        />
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
