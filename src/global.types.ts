export interface MenuItemData {
  name?: string | undefined | React.ReactElement
  icon?: any
  href: string
  span: number
  img?: Image
  showInFooter?: boolean
  idx?: number
}

interface Image {
  path: string
  width: number
}

// Types
export type Corner = 'leftUp' | 'leftDown' | 'rightUp' | 'rightDown'

// Props
export interface ContainerLayoutProps {
  backgroundColor?: string
  roundCorner: Corner
  radiusValue: string
  children?: React.ReactElement
  colSpan: number
  withPadding: boolean
}

export interface LogoProps {
  width: number
}

export interface TypographyProps {
  children?: string | undefined | React.ReactElement
  margin?: string
  color: string
}
