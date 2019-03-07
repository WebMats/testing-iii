import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import Controls from './Controls';


afterEach(cleanup)

describe('when gate is locked', () => {
    test('should not open or close gate', () => {
        const toggleOpenClose = jest.fn()
        const state = {
            locked: true, 
            closed: null, 
            toggleClosed: toggleOpenClose
        }
        const { getByTestId } = render(<Controls {...state} />)
        const toggleCloseButton = getByTestId(/toggle-close/i)
        fireEvent.click(toggleCloseButton)
        expect(toggleOpenClose).not.toHaveBeenCalled()
    })
})

test('should provide button to toggle closed and locked', () => {
    const state = { locked: true,  closed: null }
    const { getByTestId } = render(<Controls {...state} />)
    const toggleCloseButton = getByTestId(/toggle-close/i)
    const toggleLockButton = getByTestId(/toggle-locked/i)
    expect(toggleCloseButton).toBeDefined()
    expect(toggleLockButton).toBeDefined()
})

test('should change the text as the state changes', () => {
    const state = { locked: false, closed: false }
    const { getByTestId, rerender } = render(<Controls {...state} />)
    const toggleCloseButtonTextBefore = getByTestId(/toggle-close/i).textContent
    const toggleLockButtoTextBefore = getByTestId(/toggle-locked/i).textContent
    expect(toggleCloseButtonTextBefore).toEqual('Close Gate')
    expect(toggleLockButtoTextBefore).toEqual('Lock Gate')
    const updatedState = { locked: true, closed: true }
    rerender(<Controls {...updatedState} />)
    const toggleCloseButtonTextAfter = getByTestId(/toggle-close/i).textContent
    const toggleLockButtoTextAfter = getByTestId(/toggle-locked/i).textContent
    expect(toggleCloseButtonTextAfter).toEqual('Open Gate')
    expect(toggleLockButtoTextAfter).toEqual('Unlock Gate')
})