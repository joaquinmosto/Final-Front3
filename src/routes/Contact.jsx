import FormularioContacto from '../components/contact/FormularioContacto'

export default function Contact() {
  return (
    <section classname='section-contact'>
      <h1>
        Ponete en contacto {' '}
      </h1>
      <div className='contenedor-contact'>
        <FormularioContacto />
      </div>
    </section>
  )
}
