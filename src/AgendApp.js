import React, { useState } from 'react'
import { AddContact } from './components/AddContact'
import { ContactGrid } from './components/ContactGrid'

export const AgendApp = () => {

  const [contacts, setContacts] = useState([''])

  return (
    <>
      <h1>AgendApp</h1>
      <AddContact setContacts={ setContacts } />
      <hr/>
      <ol>
        {
          contacts.map( contact =>  (
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
