import { Box, Divider, Link } from '@mui/material'
import TextField from 'components/Form/Textfield'
import { SmallTitle, Text } from 'components/Typography'
import LoginButtons from './LoginButtons'
import { theme } from 'styles/theme'
import routes from 'constants/routes.json'
import PrimaryLayout from 'components/Layouts/PrimaryLayout'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { EMAIL_VALIDATION, PASSWORD_VALIDATION } from 'constants/general'
import { ApiError, LoginProps, UserInfo } from 'global.types'
import { loginUser } from 'services'
import { logIn } from 'redux/slices/user'
import { useAppDispatch } from 'redux/hooks'
import { useState } from 'react'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'

const loginSchema = z.object({
  email: EMAIL_VALIDATION,
  password: PASSWORD_VALIDATION,
})

export default function Login(): JSX.Element {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [apiError, setApiError] = useState<{
    isError: boolean
    errorMessage: string
  }>({
    isError: false,
    errorMessage: '',
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginSchema>>({
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
    reValidateMode: 'onChange',
  })

  const onSubmit = async (credentials: LoginProps) => {
    setApiError({ isError: false, errorMessage: '' })
    loginUser(credentials)
      .then((userInfo: UserInfo) => {
        dispatch(logIn({ userInfo }))
        navigate(`/${routes.MENU}`)
      })
      .catch((err: AxiosError) =>
        setApiError({
          isError: true,
          errorMessage: (err.response?.data as ApiError).message,
        })
      )
  }

  return (
    <PrimaryLayout>
      <SmallTitle>Welcome back!</SmallTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="email"
          fieldError={errors.email}
          control={control}
          label="Email"
          type="email"
          placeholder="example@goodpizzaclub.com"
          topMargin={3}
        />
        <TextField
          name="password"
          control={control}
          fieldError={errors.password}
          label="Password"
          type="password"
          placeholder="••••••••••"
          topMargin={3}
        />
        {apiError.isError && (
          <Text mt={2} align="center" color={theme.colors.red.DEFAULT}>
            {apiError.errorMessage}
          </Text>
        )}
        <LoginButtons />
      </form>
      <Box mt={5} mx="auto" width="60%">
        <Divider color={theme.colors.white.DEFAULT} />
      </Box>
      <Text mt={2} align="center" color={theme.colors.white.DEFAULT}>
        Not on <strong>Good Pizza Club</strong> yet?{' '}
        <Link href={routes.SIGN_UP}>Sign up</Link>
      </Text>
    </PrimaryLayout>
  )
}
