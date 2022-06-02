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
type Range<T extends number> = number extends T ? number : _Range<T, []>
type _Range<T extends number, R extends unknown[]> = R['length'] extends T
  ? R['length']
  : R['length'] | _Range<T, [T, ...R]>
export type ColSpan = Range<24>

// Props
export interface ContainerLayoutProps {
  backgroundColor?: string
  backgroundImg?: string
  roundCorner: Corner
  radiusValue: string
  children?: React.ReactFragment
  colSpan: ColSpan
  withPadding: boolean
  height?: string
}

export interface PageLayoutProps {
  children: React.ReactFragment
  spanContent: ColSpan
  spanImg: ColSpan
  img?: string
}

export interface LogoProps {
  width: number
}

export interface TypographyProps {
  margin?: string
  color: string
}

export interface ButtonProps {}
