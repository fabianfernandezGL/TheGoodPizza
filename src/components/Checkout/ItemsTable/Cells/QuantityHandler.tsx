import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { Stack, Box, SxProps } from '@mui/material'

import { theme } from 'styles/theme'
import { useAppDispatch } from 'redux/hooks'
import IconButton from 'components/IconButton'
import { BigText } from 'components/Typography'
import { PizzaInformation } from 'global.types'
import { removeItemQty, add } from 'redux/slices/cart'
import { generateMenuItemData } from 'utils/cartHelper'
import { DeleteOutlineTwoTone } from '@mui/icons-material'

const IconStyling: SxProps = {
  color: theme.colors.white.DEFAULT,
  width: '15px',
}

type QuantityHandlerProps = {
  quantity: number
  itemInfo: PizzaInformation
}

export function QuantityHandler({ quantity, itemInfo }: QuantityHandlerProps) {
  const dispatch = useAppDispatch()

  const removeOne = () =>
    dispatch(
      removeItemQty({
        item: generateMenuItemData({
          ...itemInfo,
        }),
      })
    )

  const addOne = () => {
    if (quantity < 100) {
      dispatch(
        add({
          item: generateMenuItemData({
            ...itemInfo,
          }),
        })
      )
    }
  }

  return (
    <Stack justifyContent="center" direction="row" spacing={4}>
      <IconButton onClick={removeOne}>
        {quantity > 1 ? (
          <RemoveIcon sx={IconStyling} />
        ) : (
          <DeleteOutlineTwoTone sx={IconStyling} />
        )}
      </IconButton>
      <Box sx={{ width: 15, textAlign: 'center' }}>
        <BigText data-testid="item-quantity">{quantity}</BigText>
      </Box>
      <IconButton onClick={addOne} disabled={quantity === 100}>
        <AddIcon sx={IconStyling} />
      </IconButton>
    </Stack>
  )
}
