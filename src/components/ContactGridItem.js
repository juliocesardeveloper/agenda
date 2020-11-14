import React from 'react'

export const ContactGridItem = ({ avatar, name, email, phone }) => {

  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={ avatar } alt={ name }/>
      <h2> { name } </h2>
      <p> <b>Email:</b> { email } </p>
      <p> <b>Phone:</b> { phone } </p>
    </div>
  )
}
