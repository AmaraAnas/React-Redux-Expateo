import React from 'react';

export default function UserInfoView({ userInfo }) {
  if (userInfo[0]) {
    return (
      <div>
        <p>Hello</p>
        <p>{JSON.stringify(userInfo[0], null, '\t')}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>Hello</p>
      </div>
    );
  }
}
