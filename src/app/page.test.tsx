import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Home from './page';

describe('Home', () => {
  it('renders the navigation and hero', () => {
    render(<Home />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Primary navigation' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: 'Luiz Barbosa' })).toBeInTheDocument();
    expect(screen.getByRole('figure', { name: 'Six guitar strings' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Selected work' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Lab' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: "Let's talk" })).toBeInTheDocument();
  });
});
