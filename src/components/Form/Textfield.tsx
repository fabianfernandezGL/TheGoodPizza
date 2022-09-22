import {
  FormControl,
  FormHelperText,
  InputAdornment,
  TextField as TextFieldMui,
  useTheme,
} from '@mui/material'
import { TextfieldProps } from 'global.types'
import { Text } from 'components/Typography/Typography'
import LockIcon from '@mui/icons-material/Lock'
import EmailIcon from '@mui/icons-material/Email'

const iconsPerType = {
  password: <LockIcon />,
  email: <EmailIcon />,
}

const TextField = ({
  error,
  label,
  placeholder,
  type = 'text',
  mt,
}: TextfieldProps) => {
  const theme = useTheme()
  const hasError = error ? true : false
  const inputType: string = type

  return (
    <>
      <Text color={theme.palette.grey[100]} mb={1} mt={mt}>
        {label}
      </Text>
      <FormControl error={hasError} fullWidth>
        <TextFieldMui
          fullWidth
          error={hasError}
          placeholder={placeholder}
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
        {error && <FormHelperText id="error-text">{error}</FormHelperText>}
      </FormControl>
    </>
  )
}

export default TextField
