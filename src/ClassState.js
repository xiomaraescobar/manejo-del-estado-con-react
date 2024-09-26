import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = 'Lobo'

class ClassState extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        error: false,
        loading: false,
        value: ''
      }
    }

    componentDidUpdate() {
      if (!!this.state.loading) {
        setTimeout(() => {
          if (this.state.value === SECURITY_CODE) {
              this.setState({loading: false, error: false})
          } else {
            this.setState({loading: false, error: true})

          }
        },3000)
      }
    }
    render() {
      const {error, loading, value} = this.state //destructuracion
    return (
        <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor, escribe el codigo de seguridad.</p>
                        {
                          //true
                          (error && !loading) && (
                            <p>Error: El codigo es incorrecto</p>
                          )
                        }
                        {
                          loading && (
                            <Loading />
                          )
                        }
                <input type="text"
                value={value}
                onChange={(event) => {
                  this.setState({value: event.target.value})
                }}
                    placeholder='Codigo de seguridad'/>
                <button onClick={() => this.setState({loading: true})}>Comprobar</button>
            </div>
    )
}
}
export {ClassState}