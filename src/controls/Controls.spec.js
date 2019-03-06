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
    const state = {
        locked: true, 
        closed: null
    }
    const { getByTestId } = render(<Controls {...state} />)
    const toggleCloseButton = getByTestId(/toggle-close/i)
    const toggleLockButton = getByTestId(/toggle-locked/i)
    expect(toggleCloseButton).toBeDefined()
    expect(toggleLockButton).toBeDefined()
})