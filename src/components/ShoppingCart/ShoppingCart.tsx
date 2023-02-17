import { Badge } from '@mui/material'
import { ShoppingCart as ShoppingCartIcon } from '@mui/icons-material'

import { useAppSelector } from 'redux/hooks'
import { selectCartItemsQty } from 'redux/slices/cart'

export function ShoppingCart({}) {
  const itemsQty = useAppSelector(selectCartItemsQty)
  return (
    <Badge badgeContent={itemsQty} color="secondary">
      <ShoppingCartIcon style={{ fontSize: '30px' }} aria-hidden="true" />
    </Badge>
  )
}
