import React from 'react';
import { shallow } from 'enzyme';

import { Form } from '../components/Form';

describe('<Form/>', function(){
  
  it('Renders without crashing', function(){
    const handleSubmit = () => {};
    shallow(<Form handleSubmit={handleSubmit}/>);
  });
});