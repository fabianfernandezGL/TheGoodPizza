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

const TextField = ({ error, label, placeholder, type, mt }: TextfieldProps) => {
  const theme = useTheme()
  const hasError = error ? true : false

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
                {type === 'password' ? <LockIcon /> : null}
                {type === 'email' ? <EmailIcon /> : null}
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
