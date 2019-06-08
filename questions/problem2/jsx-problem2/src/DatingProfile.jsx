import React from 'react';
import Occupation from './Occupation.jsx';

function DatingProfile(props) {
  const { datingProfile } = props;
  return (
    <div className="profile-card">
      <h1>{datingProfile.name}</h1>
      <h3>{datingProfile.gender}</h3>
      <div>
        Looking for:
        <ul>
          {Object.keys(datingProfile.lookingFor).map((key) => (
            <li key={`${datingProfile.name} ${key}`}>
              {key}: {'' + datingProfile.lookingFor[key]}
            </li>
          ))}
        </ul>
      </div>
      <Occupation occupation={datingProfile.occupation} />
    </div>
  );
}

export default DatingProfile;
