import React from "react";

const SECURITY_CODE = 'Lobo'

function UseState() {

  const [state, setState] = React.useState({
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  })

   const onConfirm = () => {
    setState({
      ...state,
      loading: false,
      error: false,
      confirmed: true,
    })
  }

  const onError = () => {
    setState({
      ...state,
      loading: false,
      error: true,
    })
  }

  const onWrite  = (newValue) => {
    setState({
      ...state,
      value: newValue
    })
  }

  const onCheck  = () => {
    setState({
      ...state,
      loading: true,
    })
  }
  
  const onDelete = () => {
    setState({...state, deleted: true, value: ''})
  }

  const onReset = () => {
    setState({...state, deleted: false, confirmed: false, value: ''})
  }
  React.useEffect(() => {
    if (!!state.loading) {
      setTimeout(() => {
      if (state.value === SECURITY_CODE) {
          onConfirm()
      } else {
        onError()
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
               onWrite(event.target.value)
            }}
            placeholder='Codigo de seguridad' />
          <button onClick={() => onCheck() }>Comprobar</button>
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
        onDelete()
      }}
    >Si, Eliminar</button>
    <button onClick={() => {
    onReset()
        
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
        onReset()
      }}>Recuperar useState</button>
      </>
      )
  }
  
}
export { UseState }