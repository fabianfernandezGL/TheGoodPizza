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
    span: 8,
    showInFooter: false,
  },
  {
    name: 'Menu',
    href: routes.MENU,
    span: 3,
    showInFooter: true,
  },
  {
    name: 'About Us',
    href: routes.ABOUT_US,
    span: 3,
    showInFooter: true,
  },
  {
    name: 'Contact',
    href: routes.CONTACT,
    span: 3,
    showInFooter: true,
  },
  {
    name: 'Login/Sign up',
    href: routes.LOGIN,
    span: 4,
    showInFooter: false,
  },
  {
    name: 'Help',
    href: routes.HELP,
    span: 2,
    showInFooter: true,
  },
  {
    icon: ShoppingCartOutlined,
    href: routes.CHECKOUT_ORDER,
    span: 1,
    showInFooter: false,
  },
].map((option) => {
  return {
    ...option,
    href: `${routes.MAIN_ROOT}${option.href}`,
  }
})

export default MenuOptions
