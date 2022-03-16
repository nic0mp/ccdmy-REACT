import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const background = <img 
  className='background'
  alt='ocean'
  src='/images/ocean.jpg'
/>;
const title = '';

const animalFacts = (
    <div>
        <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
    </div>
  
)
ReactDOM.render(
  animalFacts,
  document.getElementById('root')
)