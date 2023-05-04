import React from 'react';
import './Accord.css';
import { Header } from '../components';

const Accord = () => {
  function sayHello() {
    alert('This feature is in development');
  }
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Project Management" />
      <div className='note_1'>*Note: Do not use this feature of the application on mobile phones and tablets. Only for PC and Laptops</div>
      <button className='button_open_project' onClick={sayHello}>Open Project Management</button>
    </div>
  )
}

export default Accord