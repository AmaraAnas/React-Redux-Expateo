import React, { useEffect } from 'react';

/*
   IDEA: PROPOSAL FOR WORKING WITH HOOKS AND REDUX
   This is a proposal to wrok with and redux.
   TODO: Test thoses hooks !!
*/

/**
 * @example
 * function mapDispatchToProps(dispatch) {
 *    return useDispatch(dispatch)(getTasks);
 * }
 * export default connect( mapStateToProps, mapDispatchToProps )(withHook(useDispatch)(UserProfil));
 * ---------------------------------------------------------------------------------------------
 * @description This hook will automatically useEffet with dispatch method given by the container
 * @param {Function} dispatch - Basically the dispatch react-redux function given by 'connect'
 * @param {Array} inputs - @see react.hooks.useEffect
 * @returns {Object} - Object to be used in mapDispatchToProps (combined with autoUseDispatch) @see autoUseDispatch
 */
export const useDispatch = (dispatch, inputs = []) => (...actions) => ({
  [useDispatch.name]: () =>
    useEffect(() => {
      actions.forEach(dispatch);
    }, inputs),
});

/**
 *
 * @param {Function} hook - the hook to be called
 */
export const withHook = (hook) => (C) => ({
  [hook.name]: dispatch,
  ...props
}) => {
  dispatch();
  return <C {...props} />;
};
