import { Alert } from 'components/Alert'
import { FallbackProps } from 'react-error-boundary'

export function ErrorFallback({ error }: FallbackProps) {
  return (
    <Alert
      alertProps={{ severity: 'error' }}
      text={`Something went wrong: ${error.message}`}
    />
  )
}
