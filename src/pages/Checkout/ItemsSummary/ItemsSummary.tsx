import { Box, Link, Stack } from '@mui/material'

import Button from 'components/Button'
import { PizzaOrderItem } from 'global.types'
import MenuOptions from 'constants/menuOptions'
import { Subtitle } from 'components/Typography'
import { ItemsTable } from 'components/Checkout/ItemsTable'

interface ItemsTableProps {
  items: Array<PizzaOrderItem>
}

export function ItemsSummary({ items }: ItemsTableProps) {
  return (
    <Stack spacing={8}>
      <ItemsTable items={items} />
      <Box textAlign="center">
        <Button
          sx={{ width: '464px', height: '117px' }}
          size="large"
          variant="outlined"
          color="secondary"
        >
          <Subtitle>
            <Link
              color="secondary"
              underline="none"
              href={`/${
                MenuOptions.filter((option) => option.name === 'Menu').at(0)
                  ?.href
              }`}
            >
              Need Another?
            </Link>
          </Subtitle>
        </Button>
      </Box>
    </Stack>
  )
}
