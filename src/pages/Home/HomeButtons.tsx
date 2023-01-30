import { Stack } from '@mui/material'
import Button from 'components/Button'
import routes from 'constants/routes.json'

type HomeButtonsProps = {
  isAuthenticated: boolean
}

export default function HomeButtons({ isAuthenticated }: HomeButtonsProps) {
  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      marginLeft="auto"
      marginRight="auto"
      width="40%"
    >
      {!isAuthenticated && (
        <>
          <Button
            data-testid="login-btn"
            variant="outlined"
            color="secondary"
            size="large"
            fullWidth
            href={`/${routes.LOGIN}`}
          >
            Log In
          </Button>
          <Button
            data-testid="sign-up-btn"
            variant="contained"
            color="secondary"
            size="large"
            fullWidth
            href={`/${routes.SIGN_UP}`}
          >
            Sign Up
          </Button>
        </>
      )}
      {isAuthenticated && (
        <Button
          data-testid="menu-btn"
          variant="contained"
          color="secondary"
          size="large"
          fullWidth
          href={`/${routes.MENU}`}
        >
          Menu
        </Button>
      )}
    </Stack>
  )
}
