import HomeButtons from './HomeButtons'
import HomeLayout from './HomeLayout'
import HomeTitle from './HomeTitle'

export default function Home(): JSX.Element {
  return (
    <HomeLayout>
      <HomeTitle />
      <HomeButtons />
    </HomeLayout>
  )
}
