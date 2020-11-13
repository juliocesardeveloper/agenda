export const getContacts = async( contact ) => {

  const url = `http://localhost:3001/contacts?q=${ encodeURI(contact) }`;
  const resp = await fetch( url );
  const data = await resp.json();

  const names = data.map( contact => {
    return {
      id: contact.id,
      avatar: contact.avatar,
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    }
  })

  return names;

}