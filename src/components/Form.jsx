import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';
const Form = ({ search, setSearch, setQuery }) => {
  const [error, setError] = useState(false);
  const { city, country } = search;
  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === '' || country.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    setQuery(true);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        {error ? <Error message='All inputs are required' /> : null}
        <div className='input-field col s12'>
          <input
            type='text'
            name='city'
            id='city'
            value={city}
            onChange={handleChange}
          />
          <label htmlFor='city'>City: </label>
        </div>
        <div className='input-field col s12'>
          <select
            name='country'
            id='country'
            value={country}
            onChange={handleChange}>
            <option value=''>---Select Country---</option>
            <option value='US'>United States</option>
            <option value='MX'>Mexico</option>
            <option value='AR'>Argentina</option>
            <option value='CO'>Colombia</option>
            <option value='CR'>Costa Rica</option>
            <option value='ES'>Spain</option>
            <option value='PE'>Peru</option>
          </select>
          <label htmlFor='country'>Country: </label>
        </div>
        <div className='input-field col s12'>
          <input
            type='submit'
            value='Search Weather'
            className='waves-effect waves-light btn-large btn-block yellow accent-4'
          />
        </div>
      </form>
    </>
  );
};

Form.propTypes = {
  search: PropTypes.object.isRequired,
  setSearch: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default Form;
