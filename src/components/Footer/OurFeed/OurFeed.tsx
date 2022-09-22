import { theme } from 'styles/theme'
import feed1 from '../../../images/feed/feed1.png'
import feed2 from '../../../images/feed/feed2.png'
import feed3 from '../../../images/feed/feed3.png'
import feed4 from '../../../images/feed/feed4.png'
import feed5 from '../../../images/feed/feed5.png'
import feed6 from '../../../images/feed/feed6.png'
import { Subtitle } from 'components/Typography'
import { Grid, ImageList, ImageListItem } from '@mui/material'

const imgs = [feed1, feed2, feed3, feed4, feed5, feed6]

const OurFeed = () => {
  return (
    <Grid container mt={3}>
      <Grid item sm={12}>
        <Subtitle margin="1rem 0" color={theme.colors.white.DEFAULT}>
          Our Feed
        </Subtitle>
      </Grid>

      <Grid item sm={12}>
        <ImageList sx={{ width: 223, height: 145 }} cols={3} rowHeight={69}>
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
      </Grid>
    </Grid>
  )
}

export default OurFeed
