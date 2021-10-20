import routes from './routes.json'
import { ShoppingCartIcon } from '@heroicons/react/solid'

const MenuOptions = [
  { name: 'Menu', href: routes.MENU },
  { name: 'About Us', href: routes.ABOUT_US },
  { name: 'Contact', href: routes.CONTACT },
  { name: 'Login/Sign up', href: routes.LOGIN },
  { name: 'Help', href: routes.HELP },
  { icon: ShoppingCartIcon, href: routes.CHECKOUT_ORDER },
]

export default MenuOptions
