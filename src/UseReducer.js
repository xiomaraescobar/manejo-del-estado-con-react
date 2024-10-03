import React from "react";

const SECURITY_CODE = 'nada'

function UseReducer() {

  const [state, dispatch] = React.useReducer(reducer, initialState)
  React.useEffect(() => {
    if (!!state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) {
          //onConfirm()
          dispatch({type: 'CONFIRM'})
        } else {
          //onError()
          dispatch({type: 'ERROR'})

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
            onChange={(event) => {
              //onWrite(event.target.value)
          dispatch({type: 'WRITE', payload: event.target.value})

            }}
            placeholder='Codigo de seguridad' />
          <button onClick={() => 
            //onCheck()
          dispatch({type: 'CHECK'})

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
            //onDelete()
          dispatch({type: 'DELETE'})

          }}
        >Si, Eliminar</button>
        <button onClick={() => {
          //onReset()
          dispatch({type: 'RESET'})


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
          //onReset()
          dispatch({type: 'RESET'})

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
const reducerObject = (state, payload) => ({
  'CONFIRM': {
    ...state,
    loading: false,
    error: false,
    confirmed: true,
  },
  'ERROR': {
    ...state,
    loading: false,
    error: true,
  },
  'WRITE': {
    ...state,
    value: payload
  },
  'CHECK': {
    ...state,
    loading: true,
  },
  'DELETE': {
    ...state,
    deleted: true,
    value: ''
  },
  'RESET': {
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