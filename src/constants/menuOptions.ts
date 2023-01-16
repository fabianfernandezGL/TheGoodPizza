import { selectCartItemsQty } from './../redux/slices/cart/index'
import routes from './routes.json'
import logo from '../images/logo-white.svg'
import { ShoppingCart } from '@mui/icons-material'

const MenuOptions = [
  {
    href: routes.HOME,
    img: {
      path: logo,
      width: 121,
    },
    span: 4,
    showInFooter: false,
    responsiveName: 'Home',
  },
  {
    name: 'Menu',
    responsiveName: 'Menu',
    href: routes.MENU,
    span: 1,
    showInFooter: true,
  },
  {
    name: 'About Us',
    responsiveName: 'About Us',
    href: routes.ABOUT_US,
    span: 2,
    showInFooter: true,
  },
  {
    name: 'Contact',
    responsiveName: 'Contact',
    href: routes.CONTACT,
    span: 1,
    showInFooter: true,
  },
  {
    name: 'Help',
    responsiveName: 'Help',
    href: routes.HELP,
    span: 2,
    showInFooter: true,
  },
  {
    name: 'Login',
    responsiveName: 'Login',
    href: routes.LOGIN,
    span: 1,
    showInFooter: false,
  },
  {
    icon: ShoppingCart,
    responsiveName: 'Shopping Cart',
    href: routes.CHECKOUT_ROOT,
    span: 1,
    showInFooter: false,
    addBadge: true,
    selector: selectCartItemsQty,
  },
]

export default MenuOptions
