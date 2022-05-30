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
  backgroundColor: string
  roundCorner: Corner
  radiusValue: string
  children: React.ReactElement
  colSpan: number
}

export interface LogoProps {
  width: number
}

export interface BigTitleProps {
  children?: string | undefined | React.ReactElement
  color: string
}

export interface SmallTitleProps {
  children?: string | undefined | React.ReactElement
  color: string
}

export interface SubtitleProps {
  children?: string | undefined | React.ReactElement
  color: string
}

export interface TextProps {
  children?: string | undefined | React.ReactElement
  color: string
}
