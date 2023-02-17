import { useAppSelector } from 'redux/hooks'

import { Alert } from 'components/Alert'
import { selectLoading } from 'redux/slices/info'

export function InfoDispatcher(): JSX.Element {
  const isLoading = useAppSelector(selectLoading)

  return (
    <>
      {isLoading && (
        <Alert
          alertProps={{ severity: 'info', variant: 'filled' }}
          text="Loading..."
        />
      )}
    </>
  )
}
