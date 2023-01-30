import { MenuItemData } from 'global.types'
import routes from './routes.json'
import { logOut } from 'redux/slices/user'
import { ShoppingCart } from 'components/ShoppingCart/ShoppingCart'

const MenuOptions: Array<MenuItemData> = [
  {
    name: 'Home',
    href: routes.HOME,
    showInFooter: false,
    showWhenAuthActive: true,
    showWhenAuthInactive: true,
  },
  {
    name: 'Menu',
    href: routes.MENU,
    showInFooter: true,
    showWhenAuthActive: true,
    showWhenAuthInactive: true,
  },
  {
    name: 'About Us',
    href: routes.ABOUT_US,
    showInFooter: true,
    showWhenAuthActive: true,
    showWhenAuthInactive: true,
  },
  {
    name: 'Contact',
    href: routes.CONTACT,
    showInFooter: true,
    showWhenAuthActive: true,
    showWhenAuthInactive: true,
  },
  {
    name: 'Help',
    href: routes.HELP,
    showInFooter: true,
    showWhenAuthActive: true,
    showWhenAuthInactive: true,
  },
  {
    name: 'Login',
    href: routes.LOGIN,
    showInFooter: false,
    showWhenAuthActive: false,
    showWhenAuthInactive: true,
  },
  {
    name: 'Log out',
    showInFooter: false,
    showWhenAuthActive: true,
    showWhenAuthInactive: false,
    onClick: (dispatch) => dispatch(logOut()),
  },
  {
    name: <ShoppingCart />,
    showInFooter: false,
    showWhenAuthActive: true,
    showWhenAuthInactive: false,
    href: routes.CHECKOUT_ROOT,
  },
]

export default MenuOptions
