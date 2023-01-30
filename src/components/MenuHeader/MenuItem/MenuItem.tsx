import { MenuItemData } from 'global.types'
import { GridProps, Link, LinkProps } from '@mui/material'
import { theme } from 'styles/theme'
import styled from 'styled-components'
import { useAppDispatch } from 'redux/hooks'

const NormalLink = styled(Link)`
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 30px;
  cursor: pointer;
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
  data: Partial<MenuItemData>
}

const MenuItem = ({ data }: MenuItemProps & GridProps) => {
  const dispatch = useAppDispatch()
  const isActive = location.pathname === `/${data.href}`
  const menuProps: LinkProps = {
    href: data.href ? `/${data.href}` : undefined,
    underline: 'none',
    onClick: () => data.onClick?.(dispatch),
  }

  return (
    <>
      {isActive ? (
        <ActiveLink {...menuProps}>{data.name}</ActiveLink>
      ) : (
        <NormalLink {...menuProps}>{data.name}</NormalLink>
      )}
    </>
  )
}

export default MenuItem
