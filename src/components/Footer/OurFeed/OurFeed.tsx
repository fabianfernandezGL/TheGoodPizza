import { ImageList, ImageListItem, Stack } from '@mui/material'

import { theme } from 'styles/theme'
import feed1 from 'images/feed/feed1.png'
import feed2 from 'images/feed/feed2.png'
import feed3 from 'images/feed/feed3.png'
import feed4 from 'images/feed/feed4.png'
import feed5 from 'images/feed/feed5.png'
import feed6 from 'images/feed/feed6.png'
import { Subtitle } from 'components/Typography'

const imgs = [feed1, feed2, feed3, feed4, feed5, feed6]

const OurFeed = () => {
  return (
    <Stack spacing={4}>
      <Subtitle margin="0" color={theme.colors.white.DEFAULT}>
        Our Feed
      </Subtitle>

      <ImageList cols={3} rowHeight={69} gap={8}>
        {imgs.map((img, idx) => (
          <ImageListItem key={img}>
            <img
              src={`${img}?auto=format`}
              srcSet={`${img}?auto=format`}
              alt={`feed-${idx}`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  )
}

export default OurFeed
