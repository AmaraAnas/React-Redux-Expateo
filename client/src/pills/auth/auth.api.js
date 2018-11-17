import axios from 'axios';

export function login(username, password) {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          id: '1111',
          token: '23156461s1qd64',
        }),
      5000,
    ),
  );
}
