import React from 'react'


const Formulario = ({setVisible}) => {
   

    return (
    <div className='form'>
       <form className='formulario'>

       <div className='input'>
            <label>Email</label>
          <input type="text" 
          name='email'
          placeholder='nombre'
          className="form-control" 
        />
        </div>

        <div className='input'>
          <label>Password</label>
          <input type="password" 
          name='password'
          placeholder='Ingrese su password' 
          className="form-control" 
          onChange={(e) => e.target.value === "252525"?setVisible(false):setVisible(true)}/>
          </div>
       </form>
    </div>
    )
  }
  
  export default Formulario;
