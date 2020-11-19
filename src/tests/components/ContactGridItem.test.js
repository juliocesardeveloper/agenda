import React from 'react'
import { shallow } from 'enzyme'
import { ContactGridItem } from '../../components/ContactGridItem'

describe('Pruebas en ContactGridItem', () => {
  test('Debe mostrar el componente correctamente', () => {
    const wrapper = shallow( <ContactGridItem /> )
    expect( wrapper ).toMatchSnapshot();
  })
})