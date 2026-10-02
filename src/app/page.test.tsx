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
    expect(screen.getByRole('link', { name: 'Signal / Form' })).toHaveAttribute(
      'href',
      'https://github.com/luizfbarbosa12/testing-webgpu',
    );
    expect(screen.getByRole('link', { name: 'Flowerfields' })).toHaveAttribute(
      'href',
      'https://flowerfields1205.web.app',
    );
    expect(screen.getByRole('link', { name: 'Credicarro' })).toHaveAttribute(
      'href',
      'https://www.credicarro.com.br/',
    );
    expect(screen.getByRole('link', { name: 'Parcele Mais' })).toHaveAttribute(
      'href',
      'https://www.parcelemais.com.br/',
    );
    expect(screen.getByRole('link', { name: 'Relatório Beja 2024' })).toHaveAttribute(
      'href',
      'https://relatorio2024.institutobeja.com/',
    );
    expect(screen.getByRole('heading', { level: 2, name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: "Let's talk" })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      'https://github.com/luizfbarbosa12',
    );
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/luizfbarbosa/',
    );
    expect(screen.queryByText('Spotify')).not.toBeInTheDocument();
  });
});
