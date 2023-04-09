// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import dataTst from '../../../../data/data';

import CardsList from './CardsList';

describe('CardsList component', () => {
  it('Render List', () => {
    render(<CardsList data={dataTst} />);
    expect(screen.getByTestId('cards-list')).toBeInTheDocument();
    expect(screen.getAllByTestId('card-item')).toHaveLength(3);
  });
});
