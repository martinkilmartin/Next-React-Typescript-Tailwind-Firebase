import { useRouter } from 'next/router'
import NavigationLink from './NavigationLink'
import SearchInput from '../../ui/Inputs/SearchInput'
import { HEADER_LINKS } from '../../../constants/links'

type Props = {
  open: boolean
}

function HeaderMenu({ open }: Props) {
  const router = useRouter()
  return (
    <div className={open ? 'block' : 'hidden sm:block'}>
      <ul role="menu" className="sm:flex sm:flex-row">
        {HEADER_LINKS.map((link, index) => (
          <li role="none" key={link.text + index} className="p-2 sm:p-4">
            <NavigationLink
              href={link.path.toString()}
              ariaCurrent={
                router.pathname === link.path.toString() ? 'page' : false
              }
              text={link.text}
            />
          </li>
        ))}
        <li role="none" className="p-4">
          <SearchInput />
        </li>
      </ul>
    </div>
  )
}

export default HeaderMenu
