import HomeButtons from './HomeButtons'
import HomeLayout from './HomeLayout'
import HomeTitle from './HomeTitle'

type HomeProps = {
  isAuthenticated: boolean
}

export default function Home({ isAuthenticated }: HomeProps): JSX.Element {
  return (
    <HomeLayout>
      <HomeTitle />
      <HomeButtons isAuthenticated={isAuthenticated} />
    </HomeLayout>
  )
}
