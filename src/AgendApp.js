import React, { useState } from 'react'
import { AddContact } from './components/AddContact'
import { ContactGrid } from './components/ContactGrid'

export const AgendApp = () => {

  const [contacts, setContacts] = useState([''])

  const allContacts = contacts;

  return (
    <>
      <div className="search-bar-section">
        <h1>AgendApp</h1>
        <AddContact setContacts={ setContacts } />
      </div>
      <hr/>
      <ol>
        {
          allContacts.map( contact =>  (
            <ContactGrid
              key={ contact }
              contact={ contact }
            />
          ))
        }
      </ol>
    </>
  )
}
