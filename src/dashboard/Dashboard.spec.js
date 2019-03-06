import React from 'react'
import { render, cleanup, fireEvent } from 'react-testing-library'
import Dashboard from './Dashboard';
import Display from '../display/Display';
import Controls from '../controls/Controls';
import renderer from 'react-test-renderer';


test('show controls and display', () => {
    // const { getByTestId } = render(<Dashboard />);
    // const tree = renderer.create(<Dashboard />);
    // const template = renderer.create(<><Display/><Controls/></>)
    // expect(tree.toJSON()).toEqual(template.toJSON())
})