export function getSession() {
  try {
    return JSON.parse(localStorage.getItem('session'));
  } catch (e) {
    return {};
  }
}

export function setSession(user) {
  localStorage.setItem('session', JSON.stringify(user));
}

export async function login(username, password) {
  return await new Promise((resolve) =>
    setTimeout(() => {
      let user = {
        isLogged: true,
        id: '1111',
        token: '23156461s1qd64',
      };
      setSession(user);
      resolve(user);
    }, 1500),
  );
}

export async function checkAuth(token) {
  return await new Promise((resolve) =>
    setTimeout(() => {
      let user = {
        isLogged: true,
        id: '1111',
        token: '23156461s1qd64',
      };
      resolve(user);
    }, 20),
  );
}
