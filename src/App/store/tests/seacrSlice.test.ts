// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { describe, expect } from 'vitest';
import searchReducer, { changedSearch } from '../search';

describe('searchSlice', () => {
  it('empty action', () => {
    const res = searchReducer(undefined, { type: '' });

    expect(res.value).toEqual('');
  });

  it('change input "changedSearch"', () => {
    const action = {
      type: changedSearch.type,
      payload: 'testing',
    };
    const res = searchReducer(undefined, action);
    expect(res.value).toBe('testing');
  });
});
