import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import MovieList from '../MovieList';

test('renders learn react link', () => {
	const appWrapper = shallow(<MovieList />)
    const childElement = appWrapper.find('li.movie')

    expect(childElement).toBeGreaterThan(1);
});