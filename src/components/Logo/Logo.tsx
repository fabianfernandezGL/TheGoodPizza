import { LogoProps } from 'global.types'
import LogoGoodPizzaURL from '../../images/logo-white.svg'

const Logo = (props: LogoProps) => {
  return <img src={LogoGoodPizzaURL} width={props.width} />
}

export default Logo
