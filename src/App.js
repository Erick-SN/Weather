import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
function App() {
  const [search, setSearch] = useState({ city: '', country: '' });
  const [query, setQuery] = useState(false);
  const [result, setResult] = useState({});
  const { city, country } = search;
  useEffect(() => {
    const getData = async () => {
      if (query) {
        const API_KEY = '3fda9db41e20d662916ffc9b0a522d5d';
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`;
        const response = await fetch(URL).then((res) => res.json());
        setResult(response);
        setQuery(false);
      }
    };
    getData();
  }, [query]);
  return (
    <>
      <Header title='Weather app' />
      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Form search={search} setSearch={setSearch} setQuery={setQuery} />
            </div>
            <div className='col m6 s12'>
              <Weather result={result} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
