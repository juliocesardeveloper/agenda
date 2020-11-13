import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddContact = ({ setContacts }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ( e ) => {
    setInputValue( e.target.value );
  }

  const handleSubmit = ( e ) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setContacts( cntcts => [ inputValue, ...cntcts ] );
      setInputValue('');
    }
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        value={ inputValue }
        onChange={ handleInputChange }
      />
    </form>
  )
}


AddContact.propTypes = {
  setContacts: PropTypes.func.isRequired
}
