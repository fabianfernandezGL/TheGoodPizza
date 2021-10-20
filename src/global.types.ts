export interface MenuItemData {
  name?: string
  icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
  href: string
}
