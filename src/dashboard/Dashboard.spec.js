import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import Dashboard from './Dashboard';
import '../display/Display';


test('should default state to unlocked and open', () => {
    const utils = render(<Dashboard />);
})