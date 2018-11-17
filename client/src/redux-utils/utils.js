export function addPrefixToActionTypes(actionTypes, domain) {
  let withDomain = {};
  for (let actionKeys in actionTypes) {
    withDomain[actionKeys] = `@${domain}/${actionTypes[actionKeys]}`;
  }
  return withDomain;
}
