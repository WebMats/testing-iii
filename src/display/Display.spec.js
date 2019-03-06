import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import Display from './Display';


test('should default state to unlocked and open', () => {
    const { getByTestId } = render(<Display locked={false} closed={false} />);
    const lockState = getByTestId(/div-lock-state/i)
    const closeState = getByTestId(/div-close-state/i)
    expect(closeState.textContent).toEqual('Open')
    expect(lockState.textContent).toEqual('Unlocked')
})