import { describe, expect } from 'vitest';
import formReducer, { createdCard } from '../form';

describe('formSlice', () => {
  it('empty action', () => {
    const res = formReducer(undefined, { type: '' });

    expect(res.entities).toEqual([]);
  });

  it('add new card "createCard"', () => {
    const action = {
      type: createdCard.type,
      payload: {
        id: 123,
        name: 'Test',
        file: 'Test',
        passport: true,
        gender: 'Male',
        birthday: '123',
        breed: 'breed_2',
      },
    };
    const res = formReducer(undefined, action);
    expect(res.entities[0].name).toBe('Test');
  });
});
