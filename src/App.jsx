import './App.css'
import Card from './Card'

function App() {

  // cuando agrego una const para el state no me renderiza el form, no supe como solucionarlo :(

  
  const handleSubmit = (event) => {
    event.preventDefault()
    if (usuario.nombre.length < 2) {
      return (
        <h3>La cantidad de caracteres debe ser mayor a 2</h3>
      )
    }
    
  }

  return (

    <div className="App">
      
      <h1>Completa Tus Datos</h1>
    
        <form onSubmit={handleSubmit}>

          <label>Nombre: </label>
          <input type="text" onChange={(event) => setUsuario( {...usuario, nombre: EventTarget.value} ) }/>
          <label>Apellido: </label>
          <input type="text" onChange={(event) => setUsuario( {...usuario, apellido: EventTarget.value} ) }/>
          <button>Guardar</button>


        </form>
        

    </div>

  );
}

export default App
