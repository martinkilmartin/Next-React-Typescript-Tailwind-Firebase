import HeaderMenu from './HeaderMenu'

type Props = {
  menuId: string
  open: boolean
}

function HeaderNavigation({ menuId, open }: Props) {
  return (
    <nav aria-label="Main" id={menuId}>
      <HeaderMenu open={open} />
    </nav>
  )
}

export default HeaderNavigation
