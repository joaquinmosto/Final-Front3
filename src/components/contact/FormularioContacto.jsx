import { useState } from 'react'
import ListaErrores from './ListaErrores'
import generarId from './Autoid.js'
export default function FormularioContacto() {
  const [nombre, setNombre] = useState('')
  const [mail, setMail] = useState('')
  const [error, setError] = useState([])
  const [mando, setMando] = useState(false)

  const agregarError = errorNuevo => {
    setError(prevErrors => [
      ...prevErrors,
      { nombreError: errorNuevo, id: generarId() }
    ])
  }
  function esCorreoElectronico(cadena) {
    
    var patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

   
    return patron.test(cadena)
  }

  const validarFormulario = () => {
    let resultado = true
    setError([])

    if (nombre.trim().length < 5) {
      agregarError('El nombre debe tener al menos 5caracteres')
      resultado = false
    }
    if (!esCorreoElectronico(mail)) {
      agregarError('El mail no es valido')
      resultado = false
    }
    setMando(resultado)
    return resultado
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (validarFormulario()) {
      setMando(true)
      setMail('')
      setNombre('')
    }
  }

  const changeNombre = e => {
    setNombre(e.target.value)
  }

  const changeMail = e => {
    setMail(e.target.value)
  }

  return (
    <section className='section-form'>
      <h2>Deja tu demanda aqui </h2>

      <form onSubmit={handleSubmit}>
        {' '}
        {error.length === 0 ? undefined : <ListaErrores errores={error} />}
        <label htmlFor='nombre'>Nombre</label>
        <input type='text' id='nombre' value={nombre} onChange={changeNombre} />
        <label htmlFor='mail'>Mail</label>
        <input type='text' id='mail' value={mail} onChange={changeMail} />
        <button type='submit'>Enviar</button>
        {mando && (
          <p className='mando'>
            Gracias por comunicarse con odontologos <span className='titulo'>Sin Comedor</span>. En la brevedad le responderemos
          </p>
        )}
      </form>
    </section>
  )
}
