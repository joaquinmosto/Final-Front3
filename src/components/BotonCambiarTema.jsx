import { useContext, useEffect } from 'react'
import { ElementosGlobales } from '../context/ElementosGlobales'

export default function BotonCambiarTema() {
  const { tema, cambiarTema } = useContext(ElementosGlobales)

  return (
    <>
      <button onClick={cambiarTema}>
        {tema === 'claro' ? (
          'Claro'
        ) : (
          'Oscuro'
        )}
      </button>
    </>
  )
}
