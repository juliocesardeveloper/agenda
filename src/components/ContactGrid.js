import React, { useState, useEffect } from 'react'
import { getContacts } from '../helpers/getContacts'
import { ContactGridItem } from './ContactGridItem'

export const ContactGrid = ({ contact }) => {

  const [names, setNames] = useState([''])

  useEffect( () => {
    getContacts( contact )
      .then( setNames )
  }, [ contact ] )


  return (
    <>
      <div className="card-grid-titles">
        {
          contact ? <h2>Resultados de Búsqueda: { contact }</h2> : <h2>Contactos</h2>
        }
      </div>
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
