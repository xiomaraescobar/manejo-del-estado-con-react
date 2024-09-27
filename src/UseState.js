import React from "react";

const SECURITY_CODE = 'Lobo'

function UseState() {

  const [state, setState] = React.useState({
    value: '',
    error: false,
    loading: false,
    deleted: false,
    completed: false,
  })

  React.useEffect(() => {
    if (!!state.loading) {
      setTimeout(() => {
      if (state.value === SECURITY_CODE) {
        setState({
          ...state,
          loading: false,
          error: false,
          confirmed: true,
        })
      } else {
        setState({
          ...state,
          loading: false,
          error: true,
        })
      }
    }, 3000)
    }
  
  }, [state.loading])

  if (!state.confirmed && !state.deleted) {
    return (
      <>
        <div>
          <h2>Eliminar UseState</h2>
          <p>Por favor, escribe el codigo de seguridad.</p>
          {
            (state.error && !state.loading) && (
              <p>Error: El codigo es incorrecto</p>
            )
          }
          {
            state.loading && (
              <p>Cargando...</p>
            )
          }
          <input type="text"
            value={state.value}
            onChange={(event) => {
              setState({
                ...state,
                value: event.target.value
              })
            }}
            placeholder='Codigo de seguridad' />
          <button onClick={() => setState({
            ...state,
            loading: true,
          })}>Comprobar</button>
        </div>
      </>
    )
  } else if (!!state.confirmed && !state.deleted){
    return (
    <>
    <p>
      pedimos confirmacion. ¿Esta seguro?
    </p>
    <button 
      onClick={() => {
        setState({...state, deleted: true, value: ''})
      }}
    >Si, Eliminar</button>
    <button onClick={() => {
        setState({...state, deleted: false, confirmed: false, value: ''})
      }}>No, volver</button>
    </>
    )
  } else {
    return (
      <>
      <p>
        Eliminado con exito
      </p>
      <button onClick={() => {
        setState({...state, deleted: false, confirmed: false, value: ''})
      }}>Recuperar useState</button>
      </>
      )
  }
  
}
export { UseState }