import { useRouter } from 'next/router'
import NavigationLink from '../Navigation/NavigationLink'
import ThemeChange from '../../ui/DropDownSelects/ThemeChange'
import { HEADER_LINKS } from '../../../constants/links'

type Props = {
  open: boolean
}

function HeaderMenu({ open }: Props) {
  const router = useRouter()
  return (
    <div
      className={
        open
          ? 'block w-full md:flex md:items-center md:justify-between'
          : 'hidden sm:block w-full md:flex md:items-center md:justify-between'
      }
    >
      <ul
        role="menu"
        className="flex flex-col px-2 py-3 -mx-4 md:flex-row md:mx-0 md:py-0"
      >
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
      </ul>
      <div className="relative">
        <ThemeChange />
      </div>
    </div>
  )
}

export default HeaderMenu
