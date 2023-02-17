import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from 'redux/hooks'

import { Alert } from 'components/Alert'
import { resetError, selectError } from 'redux/slices/error'

type ErrorDispatcherProps = {
  children: JSX.Element
}

export function ErrorDispatcher({
  children,
}: ErrorDispatcherProps): JSX.Element {
  const error = useAppSelector(selectError)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const errorCleaner = setTimeout(() => {
      dispatch(resetError())
    }, 2500)
    return () => clearTimeout(errorCleaner)
  }, [error])

  return (
    <>
      {error.isError && (
        <Alert alertProps={{ severity: 'error' }} text={`${error.message}`} />
      )}
      {children}
    </>
  )
}
