import { store, RootState } from '../../src/Store';
import {initialState} from '../../src/Store/slices/user';
describe('store', () => {
  it('should have the correct initial state', () => {
    const _initialState: RootState = store.getState();
    expect(_initialState.user).toEqual(initialState);
  });
});