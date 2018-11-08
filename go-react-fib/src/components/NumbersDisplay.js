import React from 'react';

export const NumbersDisplay = props => {
  return (
    <div className='numbers-display-container'>
      {props.numbers.map((num, i) => {
        return <p className='indNum' key={i}>{num}</p>
      })}
    </div>
  )
}

export default NumbersDisplay;