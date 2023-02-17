import styled from 'styled-components'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import { Card as CardMui, CardProps, Stack } from '@mui/material'

import { theme } from 'styles/theme'
import Button from 'components/Button'
import { add } from 'redux/slices/cart'
import { useAppDispatch } from 'redux/hooks'
import { generateMenuItemData } from 'utils/cartHelper'
import { CardColors, PizzaInformation } from 'global.types'
import { Caption, Subtitle, Text } from 'components/Typography'

import Price from './Price'

const Card = styled(CardMui)<CardProps & CardColors>`
  max-width: 308px;
  background: ${(props: CardColors) =>
    'radial-gradient(187.18% 90.09% at 50% 9.91%, ' +
    props.gradiend0 +
    ' 0%, ' +
    props.gradiend100 +
    ' 100%)'};
  box-shadow: 0px 4px 16px 12px rgba(0, 0, 0, 0.14);
  border-radius: 10px 100px 10px 10px;
`

interface MenuOptionCardProps {
  data: PizzaInformation
  isAuthenticated: boolean
}

export function MenuOptionCard({ data, isAuthenticated }: MenuOptionCardProps) {
  const {
    name,
    description,
    img,
    price,
    calories,
    weight,
    weightType,
    colors,
  } = data

  const dispatch = useAppDispatch()

  return (
    <Card
      gradiend0={colors?.gradiend0 ?? '#FFF'}
      gradiend100={colors?.gradiend100 ?? '#000'}
    >
      <CardMedia
        component="img"
        height="233px"
        width="308px"
        src={img}
        alt={`option image ${name}`}
        sx={{ objectPosition: 'top' }}
      />
      <CardContent>
        <Subtitle color={theme.colors.black.DEFAULT}>{name}</Subtitle>

        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={4}
          my={1}
        >
          <Caption color={theme.colors.white.DEFAULT}>
            {weight}
            {weightType}
          </Caption>
          <Caption color={theme.colors.white.DEFAULT}>{calories}c</Caption>
        </Stack>
        <Text>{description}</Text>
      </CardContent>
      <CardActions>
        <Stack
          p={2}
          justifyContent="space-between"
          alignItems="flex-end"
          direction="row"
          spacing={16}
        >
          <Price price={price} />
          {isAuthenticated && (
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => {
                dispatch(add({ item: generateMenuItemData(data) }))
              }}
            >
              Add
            </Button>
          )}
        </Stack>
      </CardActions>
    </Card>
  )
}
