import characterReducer from '../../../redux/reducers/characterReducer';

describe('testing character reducer', () => {
  it('should return the initial state', () => {
    expect(characterReducer(undefined, {})).toEqual({
      list: {},
      detail: {},
      loading: false,
      error: '',
    });
  });
});
