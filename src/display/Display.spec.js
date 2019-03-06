import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import Display from './Display';

afterEach(cleanup)

test('should default state to unlocked and open', () => {
    const { getByTestId } = render(<Display locked={false} closed={false} />);
    const lockState = getByTestId(/div-lock-state/i)
    const closeState = getByTestId(/div-close-state/i)
    expect(closeState.textContent).toEqual('Open')
    expect(lockState.textContent).toEqual('Unlocked')
})

test('should display gate state', () => {
    const { getByTestId } = render(<Display locked={true} closed={true} />);
    const lockState = getByTestId(/div-lock-state/i)
    const closeState = getByTestId(/div-close-state/i)
    expect(closeState.textContent).toEqual('Closed')
    expect(lockState.textContent).toEqual('Locked')
})

test('should use the red-led class when locked/closed', () => {
    const { getByTestId } = render(<Display locked={true} closed={true} />);
    const lockState = getByTestId(/div-lock-state/i)
    const closeState = getByTestId(/div-close-state/i)
    expect(lockState.className.split(' ')[1]).toEqual('red-led')
    expect(closeState.className.split(' ')[1]).toEqual('red-led')
})