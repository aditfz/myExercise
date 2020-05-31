import React from 'react';
import './App.css';
import MyInput from './components/myInput';
function App() {
  return (
    <div className='App'>
      <MyInput type='email' />
      <MyInput type='number' />
    </div>
  );
}

export default App;
