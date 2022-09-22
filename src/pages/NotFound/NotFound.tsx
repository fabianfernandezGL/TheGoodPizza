import { BigTitle, Subtitle } from 'components/Typography'
import PrimaryLayout from 'components/Layouts/PrimaryLayout'
import { theme } from 'styles/theme'

export default function NotFound(): JSX.Element {
  return (
    <PrimaryLayout>
      <BigTitle color={theme.colors.red.DEFAULT}>404. Not found.</BigTitle>
      <Subtitle color={theme.colors.white.DEFAULT}>
        Upss! We don`t have that pizza flavor.
      </Subtitle>
    </PrimaryLayout>
  )
}
