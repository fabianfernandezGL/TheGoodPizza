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
export type ColSpan = Range<12>

// Props
export interface ShapeProps {
  backgroundColor?: string
  backgroundImg?: string
  roundCorner?: Corner
  radiusValue: string
  colSpan?: ColSpan
  height?: string
}

export interface SectionLayoutProps {
  children: React.ReactFragment
  shapeImg?: string
  shapeColor?: string
  shapeSpan?: ColSpan
  shapeHeight: string
  cornerToRound?: Corner
  radiusValue?: string
}

export interface LogoProps {
  width: number
}
