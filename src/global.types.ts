export interface MenuItemData {
  name?: string
  icon?: any
  href: string
  span: number
  img?: Image
  showInFooter: boolean
}

interface Image {
  path: string
  width: number
}
