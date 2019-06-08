import React from 'react';

function Moderator(props) {
  const { moderator } = props;
  return (
    <div>{`Moderator: ${moderator.name} alias '${moderator.nickname}'`}</div>
  );
}

export default Moderator;
