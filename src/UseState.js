import React from "react";

const SECURITY_CODE = 'Lobo'

function UseState() {
  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [value, setValue] = React.useState('')

  React.useEffect(() => {
    if (!!loading) {
      setTimeout(() => {
      if (value === SECURITY_CODE) {
        setLoading(false)
        setError(false)
      } else {
        setLoading(false)
        setError(true)
      }
      setValue('')
    }, 3000)
    }
  
  }, [loading])

  return (
    <>
      <div>
        <h2>Eliminar UseState</h2>
        <p>Por favor, escribe el codigo de seguridad.</p>
        {
          (error && !loading) && (
            <p>Error: El codigo es incorrecto</p>
          )
        }
        {
          loading && (
            <p>Cargando...</p>
          )
        }
        <input type="text"
          value={value}
          onChange={(event) => {
            setValue(event.target.value)
          }}
          placeholder='Codigo de seguridad' />
        <button onClick={() => setLoading(true)}>Comprobar</button>
      </div>
    </>
  )
}
export { UseState }