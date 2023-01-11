import {
  Table as TableMui,
  TableBody,
  TableCell as TableCellMui,
  TableHead,
  TableRow,
  Stack,
  Box,
  SxProps,
} from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'
import { BigText, Caption, Text } from 'components/Typography'
import { PizzaOrderItem } from 'global.types'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import IconButton from 'components/IconButton'
import AddIcon from '@mui/icons-material/Add'
import { capitalizeText } from 'utils/textHelper'
import { useAppDispatch } from 'redux/hooks'
import { generateMenuItemData } from 'utils/cartHelper'
import { add, removeItemQty } from 'redux/slices/cart'

interface ItemsTableProps {
  items: Array<PizzaOrderItem>
}

const Table = styled(TableMui)({
  color: theme.colors.white.DEFAULT,
  width: '100%',
}) as typeof TableMui

const TableCell = styled(TableCellMui)({
  border: 'none',
  color: theme.colors.white.DEFAULT,
}) as typeof TableCellMui

const IconStyling: SxProps = {
  color: theme.colors.white.DEFAULT,
  width: '13px',
}

export function ItemsTable({ items }: ItemsTableProps) {
  const dispatch = useAppDispatch()

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell color={theme.colors.white.DEFAULT} align="center">
            <Text>Quantity</Text>
          </TableCell>
          <TableCell align="left">
            <Text>Product</Text>
          </TableCell>
          <TableCell align="right">
            <Text>Price</Text>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map(({ itemInfo, total, quantity }) => (
          <TableRow
            key={itemInfo.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="center" width="109px">
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
            </TableCell>
            <TableCell align="left">
              <Stack spacing={5} direction="row">
                <Stack spacing={0.5}>
                  <BigText>{capitalizeText(itemInfo.name)}</BigText>
                  <Caption color="primary">Customize</Caption>
                </Stack>
              </Stack>
            </TableCell>
            <TableCell align="right">
              <BigText>${total}</BigText>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
