import { Card as CardMui, Grid } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from 'components/Button'
import styled from 'styled-components'
import { Caption, Subtitle, Text } from 'components/Typography'
import Price from './Price'
import { theme } from 'styles/theme'
import { CardColors, PizzaInformation } from 'global.types'
import { useAppDispatch } from 'redux/hooks'
import { add } from 'redux/slices/cart'
import { generateMenuItemData } from 'utils/cartHelper'

const generateCard = ({ gradiend0, gradiend100 }: CardColors) =>
  styled(CardMui)({
    maxWidth: '308px',
    // minHeight: '450px',
    background: `radial-gradient(187.18% 90.09% at 50% 9.91%, ${gradiend0} 0%, ${gradiend100} 100%)`,
    boxShadow: '0px 4px 16px 12px rgba(0, 0, 0, 0.14)',
    borderRadius: '10px 100px 10px 10px',
  }) as typeof CardMui

interface MenuOptionCardProps {
  data: PizzaInformation
}

export function MenuOptionCard({ data }: MenuOptionCardProps) {
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
  const Card = generateCard(
    colors ?? { gradiend0: '#FFF', gradiend100: '#000' }
  )
  const dispatch = useAppDispatch()

  return (
    <Card>
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

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          my={1}
        >
          <Grid item xs={4}>
            <Caption color={theme.colors.white.DEFAULT}>
              {weight}
              {weightType}
            </Caption>
          </Grid>
          <Grid item xs={4}>
            <Caption color={theme.colors.white.DEFAULT}>{calories}c</Caption>
          </Grid>
        </Grid>
        <Text>{description}</Text>
      </CardContent>
      <CardActions>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-end"
          p={2}
        >
          <Grid item>
            <Price price={price} />
          </Grid>
          <Grid item>
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
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}
