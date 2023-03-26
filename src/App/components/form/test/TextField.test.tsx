import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import TextField from '../TextField';
const ref = React.createRef<HTMLInputElement>();
describe('FormPage', () => {
  it('Render FormPage', () => {
    render(<TextField label="name" name="name" error={''} reference={ref} />);
    expect(screen.getByText('name')).toBeInTheDocument();
  });
});
