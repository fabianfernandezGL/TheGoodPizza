import { z } from 'zod'
import { useState } from 'react'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Box, Divider, Link } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  DEFAULT_ERROR,
  EMAIL_VALIDATION,
  PASSWORD_VALIDATION,
} from 'constants/general'
import { theme } from 'styles/theme'
import { loginUser } from 'services'
import { logIn } from 'redux/slices/user'
import { reset } from 'redux/slices/cart'
import routes from 'constants/routes.json'
import { useAppDispatch } from 'redux/hooks'
import TextField from 'components/Form/Textfield'
import { SmallTitle, Text } from 'components/Typography'
import PrimaryLayout from 'components/Layouts/PrimaryLayout'
import { ApiError, CustomError, LoginProps, UserInfo } from 'global.types'

import LoginButtons from './LoginButtons'
import { showError } from 'redux/slices/error'
import { setLoading } from 'redux/slices/info'

const loginSchema = z.object({
  email: EMAIL_VALIDATION,
  password: PASSWORD_VALIDATION,
})

export default function Login(): JSX.Element {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [apiError, setApiError] = useState<CustomError>(DEFAULT_ERROR)

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
    setApiError(DEFAULT_ERROR)
    dispatch(setLoading({ isLoading: true }))
    loginUser(credentials)
      .then((userInfo: UserInfo) => {
        dispatch(logIn({ userInfo }))
        dispatch(reset())
        navigate(`/${routes.MENU}`)
      })
      .catch((err: AxiosError) => {
        if (err.response) {
          setApiError({
            isError: true,
            message: (err.response?.data as ApiError).message,
          })
        } else {
          dispatch(showError({ message: err.message }))
        }
      })
      .finally(() => dispatch(setLoading({ isLoading: false })))
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
            {apiError.message}
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
