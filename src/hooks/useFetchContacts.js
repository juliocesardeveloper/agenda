import { useState, useEffect } from 'react'
import { getContacts } from '../helpers/getContacts'

export const useFetchContacts = ( contact ) => {
  const [state, setstate] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {

    getContacts( contact )
      .then( names => {
        setstate({
          data: names,
          loading: false
        });
      })

  }, [contact])

  return state;
}
