import React from 'react';
import { render } from '@testing-library/react';
import { Example } from './example';
import { expect, describe, it } from 'vitest'

describe('Example', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Example />);
    expect(baseElement).toBeTruthy();
  });
});
