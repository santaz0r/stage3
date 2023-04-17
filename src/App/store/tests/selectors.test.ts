// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { describe, expect } from 'vitest';
import { getAllCards } from '../form';

describe('redux selectors', () => {
  it('select cards', () => {
    const form = {
      entities: [
        { id: 123, name: 'Test', file: 'Test', passport: true, gender: 'Male', birthday: '123', breed: 'breed_2' },
      ],
    };
    const res = getAllCards()({ form });
    expect(res).toEqual(form.entities);
  });
});
