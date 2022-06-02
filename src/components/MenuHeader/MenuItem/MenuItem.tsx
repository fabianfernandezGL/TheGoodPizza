import { Link } from 'react-router-dom'
import { MenuItemData } from 'global.types'
import { Grid } from '@mui/material'

interface MenuItemProps {
  item: MenuItemData
}

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <Grid item sm={item.span}>
      <Link to={item.href} key={item.idx}>
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
