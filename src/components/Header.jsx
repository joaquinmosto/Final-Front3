import { Link } from 'react-router-dom'
import BotonCambiarTema from './BotonCambiarTema'
export default function Header() {
  return (
    <header>
      <h1>
        <span className='titulo'> Dentista</span> Sin comedor{' '}
        <span className='titulo'>
        </span>
      </h1>
      <nav>
        <Link to='/'>Home </Link>
        <Link to='/Contact'>Contacto </Link>
        <Link to='/Favs'>Favoritos </Link>
        <BotonCambiarTema />
      </nav>
    </header>
  )
}
