import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../src/components/loader/loader';

describe('<Loader />', () => {
    it('has the correct class', () => {
      const expectedClass = 'spinner';
      const loader = shallow(<Loader />);
      expect(loader.find('div').hasClass(expectedClass)).toBeDefined();
    });
});
