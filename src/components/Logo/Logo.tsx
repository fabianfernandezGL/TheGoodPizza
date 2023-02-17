import { LogoProps } from 'global.types'
import WhiteLogoGoodPizzaURL from 'images/logo-white.svg'
import BlackLogoGoodPizzaURL from 'images/logo-black.svg'

const Logo = ({ color, width }: LogoProps) => {
  return (
    <img
      src={color === 'white' ? WhiteLogoGoodPizzaURL : BlackLogoGoodPizzaURL}
      width={width}
    />
  )
}

export default Logo
