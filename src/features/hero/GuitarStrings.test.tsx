import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { GuitarStrings } from './GuitarStrings';

function setReducedMotion(matches: boolean) {
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({ matches }) as MediaQueryList),
  );
}

function mockAnimations() {
  const animate = vi.fn();
  const getAnimations = vi.fn(() => []);

  Object.defineProperties(Element.prototype, {
    animate: { configurable: true, value: animate },
    getAnimations: { configurable: true, value: getAnimations },
  });

  return { animate, getAnimations };
}

describe('GuitarStrings', () => {
  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    Reflect.deleteProperty(Element.prototype, 'animate');
    Reflect.deleteProperty(Element.prototype, 'getAnimations');
  });

  it('vibrates a string when its button is activated', () => {
    setReducedMotion(false);
    const { animate, getAnimations } = mockAnimations();

    render(<GuitarStrings interactive />);
    fireEvent.click(screen.getByRole('button', { name: 'Pluck Low E string' }));

    expect(getAnimations).toHaveBeenCalledOnce();
    expect(animate).toHaveBeenCalledOnce();
  });

  it('does not animate when reduced motion is requested', () => {
    setReducedMotion(true);
    const { animate } = mockAnimations();

    render(<GuitarStrings interactive />);
    fireEvent.click(screen.getByRole('button', { name: 'Pluck High E string' }));

    expect(animate).not.toHaveBeenCalled();
  });

  it('renders decorative strings when the interaction is disabled', () => {
    render(<GuitarStrings interactive={false} />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.getByRole('figure', { name: 'Six guitar strings' })).toBeInTheDocument();
  });
});
