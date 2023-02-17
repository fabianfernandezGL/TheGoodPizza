import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { Stack, IconButton, Box, SxProps } from '@mui/material'

import { theme } from 'styles/theme'
import { useAppDispatch } from 'redux/hooks'
import { BigText } from 'components/Typography'
import { removeItemQty, add } from 'redux/slices/cart'
import { generateMenuItemData } from 'utils/cartHelper'
import { PizzaInformation } from 'global.types'

const IconStyling: SxProps = {
  color: theme.colors.white.DEFAULT,
  width: '13px',
}

type QuantityHandlerProps = {
  quantity: number
  itemInfo: PizzaInformation
}

export function QuantityHandler({ quantity, itemInfo }: QuantityHandlerProps) {
  const dispatch = useAppDispatch()

  return (
    <Stack justifyContent="center" direction="row" spacing={4}>
      <IconButton
        onClick={() =>
          dispatch(
            removeItemQty({
              item: generateMenuItemData({
                ...itemInfo,
              }),
            })
          )
        }
      >
        <RemoveIcon sx={IconStyling} />
      </IconButton>
      <Box sx={{ width: 15, textAlign: 'center' }}>
        <BigText>{quantity}</BigText>
      </Box>
      <IconButton
        onClick={() =>
          dispatch(
            add({
              item: generateMenuItemData({
                ...itemInfo,
              }),
            })
          )
        }
      >
        <AddIcon sx={IconStyling} />
      </IconButton>
    </Stack>
  )
}
