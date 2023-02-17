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
  NAME_VALIDATION,
  PASSWORD_VALIDATION,
  PHONE_VALIDATION,
} from 'constants/general'
import { theme } from 'styles/theme'
import { registerUser } from 'services'
import { logIn } from 'redux/slices/user'
import routes from 'constants/routes.json'
import { useAppDispatch } from 'redux/hooks'
import TextField from 'components/Form/Textfield'
import { SmallTitle, Text } from 'components/Typography'
import PrimaryLayout from 'components/Layouts/PrimaryLayout'
import { ApiError, CustomError, SignUpProps, UserInfo } from 'global.types'

import LoginButtons from './SignUpButtons'
import { showError } from 'redux/slices/error'
import { setLoading } from 'redux/slices/info'

const signUpSchema = z.object({
  email: EMAIL_VALIDATION,
  password: PASSWORD_VALIDATION,
  name: NAME_VALIDATION,
  phoneNumber: PHONE_VALIDATION,
})

export default function SignUp(): JSX.Element {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [apiError, setApiError] = useState<CustomError>(DEFAULT_ERROR)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof signUpSchema>>({
    mode: 'onChange',
    resolver: zodResolver(signUpSchema),
    reValidateMode: 'onChange',
  })

  const onSubmit = async (userData: SignUpProps) => {
    setApiError(DEFAULT_ERROR)
    dispatch(setLoading({ isLoading: true }))
    registerUser(userData)
      .then((userInfo: UserInfo) => {
        dispatch(logIn({ userInfo }))
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
      <SmallTitle>Happy to have you!</SmallTitle>
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
          fieldError={errors.password}
          control={control}
          label="Password"
          type="password"
          placeholder="••••••••••"
          topMargin={3}
        />
        <TextField
          name="name"
          fieldError={errors.name}
          control={control}
          label="Full Name"
          type="text"
          placeholder="John Doe"
          topMargin={3}
        />
        <TextField
          name="phoneNumber"
          fieldError={errors.phoneNumber}
          control={control}
          label="Phone Number"
          type="tel"
          placeholder="+(506) 1234 5678"
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
        Already on <strong>Good Pizza Club</strong>?{' '}
        <Link href={routes.LOGIN}>Sign in</Link>
      </Text>
    </PrimaryLayout>
  )
}
