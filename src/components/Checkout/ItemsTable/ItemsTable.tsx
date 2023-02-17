import {
  Table as TableMui,
  TableBody,
  TableCell as TableCellMui,
  TableRow,
  Stack,
} from '@mui/material'
import styled from 'styled-components'

import { theme } from 'styles/theme'
import { PizzaOrderItem } from 'global.types'
import { capitalizeText } from 'utils/textHelper'
import { BigText, Caption, Text } from 'components/Typography'

import { ItemsTableHeader } from './ItemsTableHeader'
import { QuantityHandler } from './Cells/QuantityHandler'

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

export function ItemsTable({ items }: ItemsTableProps) {
  return (
    <>
      {items.length === 0 && (
        <Text color={theme.colors.white.DEFAULT}>
          No pizza yet! Go to our menu and select a pizza flavor (we have some
          options there)!
        </Text>
      )}
      {items.length > 0 && (
        <Table>
          <ItemsTableHeader />
          <TableBody>
            {items.map(({ itemInfo, total, quantity }) => (
              <TableRow
                key={itemInfo.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center" width="109px">
                  <QuantityHandler itemInfo={itemInfo} quantity={quantity} />
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
      )}
    </>
  )
}
