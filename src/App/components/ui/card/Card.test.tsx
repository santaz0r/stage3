import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import CardItem from './Card';
import testData from '../../../../data/data.json';

describe('Card component', () => {
  it('Render Item', () => {
    const data = [...testData];
    render(<CardItem data={data[0]} />);
    expect(screen.getByTestId('card-item')).toBeInTheDocument();
    expect(screen.queryByTestId('type')).toBeNull();
  });
  it('Render Item with type', () => {
    const data = [...testData];
    render(<CardItem data={data[2]} />);
    expect(screen.getByTestId('card-item')).toBeInTheDocument();
    expect(screen.queryByTestId('type')).not.toBeNull();
  });
  it('Open modal', () => {
    const data = [...testData];
    render(<CardItem data={data[2]} />);
    const button = screen.getByText(/More detalis/i);
    fireEvent.click(button);
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});
