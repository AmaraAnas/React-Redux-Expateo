import { addEntities } from './schema.actions';
import { schemaSelectorCreator } from './schema.selectors';
import SchemaReducer from './schema.reducer';

describe('Schema actions - reducers - selector', () => {
  it('Should add an entity into the store', () => {
    let state = {
      entities: {},
    };
    state = SchemaReducer(
      state,
      addEntities({ users: [{ id: 1, name: 'jhon' }, { id: 2, name: 'doe' }] }),
    );
    expect(state).toEqual({
      entities: {
        users: [{ id: 1, name: 'jhon' }, { id: 2, name: 'doe' }],
      },
    });
  });

  it('Should return a selector', () => {
    const userSelector = schemaSelectorCreator('users', []);
    expect(typeof userSelector === 'function').toEqual(true);
  });

  it('Should created selector return default value if none in the store', () => {
    let state = {
      Schema: {
        entities: {},
      },
    };
    const userSelector = schemaSelectorCreator('users', []);
    expect(userSelector(state)).toEqual([]);
  });

  it('Should created selector return the stored values', () => {
    let state = {
      Schema: {
        entities: {
          users: [{ id: 1, name: 'jhon' }, { id: 2, name: 'doe' }],
        },
      },
    };
    const userSelector = schemaSelectorCreator('users', []);
    expect(userSelector(state)).toEqual(state.Schema.entities.users);
  });
});
