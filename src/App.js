import React from 'react';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  return (
    <>
      <Header title='Weather app' />
      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Form />
            </div>
            <div className='col m6 s12'>2</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
