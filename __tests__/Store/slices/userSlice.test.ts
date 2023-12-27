import {store} from '@/Store'
import { initialState } from '@/Store/slices/user';

describe('Slice user', () => {
  it('Initial state', () => {
    const state = store.getState().user;
    expect(state).toEqual(initialState)
  })
})