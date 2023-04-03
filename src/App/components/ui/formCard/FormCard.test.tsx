import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormCard from './FormCard';

const testData = {
  birthday: '2023-03-01',
  breed: 'breed_4',
  file: 'https://sun9-42.userapi.com/impg/m7AHf5EwOKbll0tgnwkTWXcXNmxVL6l2MIyUag/xYDWIATAsJg.jpg?size=701x700&quality=96&sign=37546dd35e1f0f5ab30a73ecbe76ee8a&type=album',
  gender: 'Male',
  id: '101',
  name: 'KAVAVAwe',
  passport: true,
};
const testWrongData = {
  birthday: '2023-03-01',
  breed: 'breed_4',
  file: 'https://sun9-42.userapi.com/impg/m7AHf5EwOKbll0tgnwkTWXcXNmxVL6l2MIyUag/xYDWIATAsJg.jpg?size=701x700&quality=96&sign=37546dd35e1f0f5ab30a73ecbe76ee8a&type=album',
  gender: 'Male',
  id: '101',
  name: 'KAVAVAwe',
  passport: false,
};

describe('FormCard', () => {
  it('Render Item', () => {
    render(<FormCard data={testData} />);
    expect(screen.getByTestId('form-card-item')).toBeInTheDocument();
    expect(screen.getByTestId('passport-checkbox')).toHaveTextContent('Yes');
  });
  it('Render Item', () => {
    render(<FormCard data={testWrongData} />);
    expect(screen.getByTestId('form-card-item')).toBeInTheDocument();
    expect(screen.getByTestId('passport-checkbox')).toHaveTextContent('No');
  });
});
