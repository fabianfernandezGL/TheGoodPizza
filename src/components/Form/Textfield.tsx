import {
  FormControl,
  FormHelperText,
  InputAdornment,
  TextField as TextFieldMui,
  useTheme,
} from '@mui/material'
import { TextfieldProps } from 'global.types'
import { Text } from 'components/Typography'
import LockIcon from '@mui/icons-material/Lock'
import EmailIcon from '@mui/icons-material/Email'
import { Controller } from 'react-hook-form'

const iconsPerType = {
  password: <LockIcon />,
  email: <EmailIcon />,
}

const TextField = ({
  name,
  control,
  fieldError,
  label,
  placeholder,
  type = 'text',
  topMargin,
}: TextfieldProps) => {
  const theme = useTheme()
  const inputType: string = type

  return (
    <>
      <Text color={theme.palette.grey[100]} mb={1} mt={topMargin}>
        {label}
      </Text>
      <FormControl error={!!fieldError} fullWidth>
        <Controller
          name={name}
          control={control}
          key={name}
          render={({ field: { onChange } }) => (
            <TextFieldMui
              fullWidth
              placeholder={placeholder}
              onChange={onChange}
              error={!!fieldError}
              type={type}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {type &&
                      type in iconsPerType &&
                      iconsPerType[inputType as keyof typeof iconsPerType]}
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
        {fieldError && (
          <FormHelperText id="error-text">{fieldError.message}</FormHelperText>
        )}
      </FormControl>
    </>
  )
}

export default TextField
