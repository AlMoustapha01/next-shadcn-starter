import React from 'react';

import { render } from '@testing-library/react';
import { expect, describe, it } from 'vitest'

import { Example2 } from './example2';

describe('Example2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Example2 />);
    expect(baseElement).toBeTruthy();
  });
});