import {
  Alert as AlertMui,
  AlertProps as AlertPropsMui,
  IconButton,
  Snackbar,
} from '@mui/material'
import { CloseTwoTone } from '@mui/icons-material'

type AlertProps = {
  handleClose?: () => void
  text: string
  alertProps: AlertPropsMui
}

export function Alert({ handleClose, text, alertProps }: AlertProps) {
  return (
    <Snackbar
      open
      onClose={handleClose}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <AlertMui
        action={
          handleClose && (
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClose}
            >
              <CloseTwoTone fontSize="inherit" />
            </IconButton>
          )
        }
        {...alertProps}
      >
        {text}
      </AlertMui>
    </Snackbar>
  )
}
