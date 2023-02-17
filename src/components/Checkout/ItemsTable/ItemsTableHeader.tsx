import styled from 'styled-components'
import { TableHead, TableRow, TableCell as TableCellMui } from '@mui/material'

import { theme } from 'styles/theme'
import { Text } from 'components/Typography'

const TableCell = styled(TableCellMui)({
  border: 'none',
  color: theme.colors.white.DEFAULT,
}) as typeof TableCellMui

export function ItemsTableHeader() {
  return (
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
  )
}
