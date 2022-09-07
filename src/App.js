import Formulario from './components/Formulario'
import Header from './components/Header';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const[visible,setVisible] =useState(true)
  return (
    <div className='container'>
      <div className='row'>
        <Header texto="Estado de los componentes y eventos"/>
        <Formulario setVisible={setVisible}/>
        <Button visible={visible}/>
      </div>
    </div>
  );
}

export default App;
