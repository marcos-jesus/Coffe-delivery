import { HomeContainer } from './styles'
import HomeLogo from '../../assets/Home/Home.svg'
export function Home() {
  return (
    <HomeContainer>
      <img src={HomeLogo} alt="" />
    </HomeContainer>
  )
}