import { addPrefixToActionTypes } from './utils';

it('Should addPrefixToActionTypes ', () => {
  const action_types = {
    TEST1: 'TEST1',
    TEST2: 'TEST2',
    TEST3: 'TEST3',
  };
  const domain = 'APP';

  expect(addPrefixToActionTypes(action_types, domain)).toEqual({
    TEST1: '@APP/TEST1',
    TEST2: '@APP/TEST2',
    TEST3: '@APP/TEST3',
  });
});
