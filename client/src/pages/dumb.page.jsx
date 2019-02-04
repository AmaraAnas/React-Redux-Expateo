import React from 'react';

export default function({ match, location }) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'grey',
      }}
    >
      <h1>
        {location.pathname.split('/')[1]} : {match.params.id}
      </h1>
    </div>
  );
}
