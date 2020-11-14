import React from 'react'
import { useFetchContacts } from '../hooks/useFetchContacts'
import { ContactGridItem } from './ContactGridItem'

export const ContactGrid = ({ contact }) => {

  const { data:names, loading } = useFetchContacts( contact );

  return (
    <>
      <div className="card-grid-titles animate__animated animate__fadeIn">
        {
          contact ? <h2>Resultados de Búsqueda: { contact }</h2> : <h2>Contactos</h2>
        }
      </div>

      { loading && <p className="animate__animated animate__flash">Cargando</p> }

      <div className="card-grid" >
        {
          names.map( name => (
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
