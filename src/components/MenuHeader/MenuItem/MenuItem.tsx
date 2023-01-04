import { MenuItemData } from 'global.types'
import { Grid, GridProps, Link, LinkProps } from '@mui/material'
import { theme } from 'styles/theme'
import styled from 'styled-components'

const NormalLink = styled(Link)`
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
  color: ${theme.colors.white.DEFAULT};

  &:hover {
    color: ${theme.colors.gray.light};
  }
`

const ActiveLink = styled(NormalLink)`
  color: ${theme.colors.yellow.DEFAULT};
  font-weight: 700;

  &:hover {
    color: ${theme.colors.yellow.DEFAULT};
  }
`

interface MenuItemProps {
  data: MenuItemData
  center: boolean
}

const MenuItem = ({
  data,
  center,
  ...gridProps
}: MenuItemProps & GridProps) => {
  const isActive = location.pathname === `/${data.href}`
  const content = (
    <>
      {data.icon && (
        <data.icon style={{ fontSize: '30px' }} aria-hidden="true" />
      )}
      {data.name}
      {data.img && <img src={data.img.path} width={data.img.width} />}
    </>
  )
  const menuProps: LinkProps = {
    href: `/${data.href}`,
    underline: 'none',
  }

  return (
    <Grid
      item
      xs={data.span}
      key={data.idx}
      textAlign={center ? 'center' : 'inherit'}
      {...gridProps}
    >
      {isActive ? (
        <ActiveLink {...menuProps}>{content}</ActiveLink>
      ) : (
        <NormalLink {...menuProps}>{content}</NormalLink>
      )}
    </Grid>
  )
}

MenuItem.defaultProps = {
  center: false,
}

export default MenuItem
