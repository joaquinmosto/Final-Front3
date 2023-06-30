export default function ListaErrores(props) {
  const { errores } = props
  return (
    <div className='errores'>
      <h2>No funciona, tener paciencia, no somos profecihonales</h2>
      <ol>
        {errores.map(error => (
          <li key={error.id}>{error.nombreError}</li>
        ))}
      </ol>
    </div>
  )
}
