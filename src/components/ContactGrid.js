import React from 'react'
import { useFetchContacts } from '../hooks/useFetchContacts'
import { ContactGridItem } from './ContactGridItem'

export const ContactGrid = ({ contact }) => {

  const { data:names, loading } = useFetchContacts( contact );
  const allContacts = names;
  

  return (
    <>
      <div className="card-grid-titles animate__animated animate__fadeIn">
        {
          contact ? <h2>Resultados de Búsqueda: { contact }</h2> : <h2 className="contactos">Contactos</h2>
        }
      </div>

      { loading && <p className="animate__animated animate__flash">Cargando</p> }

      <div className="card-grid" >
        {
          allContacts.map( name => (
            <ContactGridItem
              key={ name.id }
              { ...name }
            />
          ) )
        }
      </div>
    </>
  )
}
