import React from 'react';

function Occupation(props) {
  const { occupation } = props;
  return (
    <div>
      <h3>Occupation</h3>
      <div>
        {occupation.title} - ${occupation.salary.toLocaleString()}
      </div>
      <h3>Location</h3>
      <div>City: {occupation.location.city}</div>
      <div>Province: {occupation.location.province}</div>
      <div>Country: {occupation.location.country}</div>
    </div>
  );
}

export default Occupation;
