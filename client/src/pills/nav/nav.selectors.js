export const shouldCollapseSelector = (store) =>
  store.router.location.pathname !== '/dashboard';
