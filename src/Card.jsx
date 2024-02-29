import { useState } from "react"
import App from "./App"

const Card = () => {
  const [show, setShow] = useState()

  const [usuario, setUsuario] = setState({
    nombre: '',
    apellido: ''
  })

  return (
      <div>
        {show && <h4>{usuario.nombre}, tus datos han sido guardados</h4>}
      </div>
  )
}

export default Card