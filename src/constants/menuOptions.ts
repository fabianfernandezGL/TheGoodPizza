import routes from './routes.json'
import { ShoppingCartOutlined } from '@ant-design/icons'
import logo from '../images/logo-white.svg'

const MenuOptions = [
  {
    href: routes.HOME,
    img: {
      path: logo,
      width: 121,
    },
    span: 12,
  },
  {
    name: 'Menu',
    href: routes.MENU,
    span: 2,
  },
  {
    name: 'About Us',
    href: routes.ABOUT_US,
    span: 2,
  },
  {
    name: 'Contact',
    href: routes.CONTACT,
    span: 2,
  },
  {
    name: 'Login/Sign up',
    href: routes.LOGIN,
    span: 3,
  },
  {
    name: 'Help',
    href: routes.HELP,
    span: 2,
  },
  {
    icon: ShoppingCartOutlined,
    href: routes.CHECKOUT_ORDER,
    span: 1,
  },
]

export default MenuOptions
