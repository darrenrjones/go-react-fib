import React from 'react';

export const ValidForm = props => {

  if (!props.formErrors) {
    return <div className='form-error'><p>INVALID INPUT</p><p>Please try a number between 0 and 1,477</p></div>
  } else {
    return ''
  }
}

export default ValidForm;