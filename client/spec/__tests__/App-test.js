import React from 'react';
import { render } from '@testing-library/react';

import App from '../../src/components/App.jsx';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);

    // screen.getByText('What up my Quadratic Quokkas Q.Q');

    expect(screen.getByText('What up my Quadratic Quokkas Q.Q')).toBeInTheDocument();
  });
});