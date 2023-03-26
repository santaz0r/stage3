import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardItem from './Card';
import testData from '../../../../data/data.json';

describe('Card component', () => {
  it('Render Item', () => {
    const data = [...testData];
    render(<CardItem {...data[0]} />);
    expect(screen.getByTestId('card-item')).toBeInTheDocument();
  });
});
