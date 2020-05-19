import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import MovieList from '../MovieList.js';
import App from '../App'

test('renders at least one movie', () => {
	const greeterWrapper = shallow(<MovieList />)
	greeterWrapper.update()
	expect(greeterWrapper.find('li').length).toBeGreaterThanOrEqual(1);
});