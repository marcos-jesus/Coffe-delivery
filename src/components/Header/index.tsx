import { HeaderContainer, ContainerBase , Location, Cart } from './styles'
import { MapPin } from 'phosphor-react'
import  Logo  from '../../assets/Logo.svg'

import CartLogo from '../../assets/Header/Cart.svg'
import LocationLogo from '../../assets/Header/Location.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <ContainerBase>
        <Location>
          <img src={LocationLogo} alt="" /> Guarulhos, SP
        </Location>

        <Cart>
          <img src={CartLogo} alt="" />
        </Cart>
      
      </ContainerBase>
      
    </HeaderContainer>
  )
}