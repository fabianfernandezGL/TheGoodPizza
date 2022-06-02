import { MenuItemData } from 'global.types'
import { Grid, Link } from '@mui/material'

interface MenuItemProps {
  item: MenuItemData
}

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <Grid item xs={item.span}>
      <Link href={item.href} key={item.idx} underline="none">
        {item.icon && (
          <item.icon style={{ fontSize: '30px' }} aria-hidden="true" />
        )}
        {item.name}
        {item.img && <img src={item.img.path} width={item.img.width} />}
      </Link>
    </Grid>
  )
}

export default MenuItem
