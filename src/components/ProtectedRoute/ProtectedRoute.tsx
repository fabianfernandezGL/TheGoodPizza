import { useNavigate } from 'react-router-dom'
import routes from 'constants/routes.json'

type ProtectedRouteProps = {
  children: JSX.Element
  isAuthenticated: boolean
}

export function ProtectedRoute({
  children,
  isAuthenticated,
}: ProtectedRouteProps) {
  const navigate = useNavigate()
  if (!isAuthenticated) {
    navigate(`/${routes.LOGIN}`)
  }
  return <>{children}</>
}
