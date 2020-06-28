import React from 'react';
const Weather = ({ result }) => {
  const { name, main } = result;
  if (!name) return null;
  const KELVIN = 273.15;
  return (
    <>
      <div className='card-panel white col s12'>
        <div className='black-text'>
          <h2>{name}'s Weather</h2>
          <p className='temperatura'>
            {parseFloat(main.temp - KELVIN, 10).toFixed(2)}{' '}
            <span>&#x2103;</span>
          </p>
          <p>
            Maximum temperature:
            {parseFloat(main.temp_max - KELVIN, 10).toFixed(2)}{' '}
            <span>&#x2103;</span>
          </p>
          <p>
            Minimum temperature:
            {parseFloat(main.temp_min - KELVIN, 10).toFixed(2)}{' '}
            <span>&#x2103;</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Weather;
