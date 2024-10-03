import React from "react";

const SECURITY_CODE = 'nada'

function UseReducer() {
//variables de estado
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const onConfirm = () => {
    dispatch({type: 'CONFIRM'})
  }
  const onError = () => {
    dispatch({type: 'ERROR'})
  }
  const onWrite= (event) => {
    
    dispatch({type: 'WRITE', payload: event.target.value})
  }
  const onDelete = () => {
    dispatch({type: 'DELETE'})
  }
  const onReset = () => {
    dispatch({type: 'RESET'})
  }
  const onCheck = () => {
    dispatch({type: 'CHECK'})
  }
//useEffect
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
          <h2>Eliminar UseReducer</h2>
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
            onChange={  onWrite }
            placeholder='Codigo de seguridad' />
          <button onClick={() => 
            onCheck()
            }>Comprobar</button>
        </div>
      </>
    )
  } else if (!!state.confirmed && !state.deleted) {
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

const initialState = {
  value: '',
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
}
const actionTypes = {
  confirm: 'CONFIRM',
  error:  'ERROR',
  write:  'WRITE',
  check: 'CHECK',
  delete: 'DELETE',
  reset:  'RESET'

}
const reducerObject = (state, payload) => ({
 [actionTypes.confirm] : {
    ...state,
    loading: false,
    error: false,
    confirmed: true,
  },
  [actionTypes.error]: {
    ...state,
    loading: false,
    error: true,
  },
  [actionTypes.write]: {
    ...state,
    value: payload
  },
  [actionTypes.check]: {
    ...state,
    loading: true,
  },
  [actionTypes.reset]: {
    ...state,
    deleted: true,
    value: ''
  },
  [actionTypes.delete]: {
    ...state,
    deleted: false,
    confirmed: false,
    value: ''
  }
})

const reducer = (state, action) => {
  return(reducerObject(state, action.payload)[action.type] ||state)
}


export { UseReducer}