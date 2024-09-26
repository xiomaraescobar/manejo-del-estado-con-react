import React from "react";

class ClassState extends React.Component {
  render() {
    return (
        <>
      <div className='m-12'>
                <h2 className='text-3xl font-medium'>Eliminar Class Name</h2>
                <p>Por favor, escribe el codigo de seguridad.</p>
                        <p className='text-red-500'>Error: El codigo es incorrecto</p>
                        <p>Cargando...</p>
                <input type="text"
                    placeholder='Codigo de seguridad'/>
                <button>Comprobar</button>
            </div>
        </>
    )
  }
}
export {ClassState}