import Link from 'next/link'

type Props = {
  href: string
  ariaCurrent?: false | true | 'page' | 'step' | 'location' | 'date' | 'time'
  text: string
  icon?: string
}

function NavigationLink({ href, ariaCurrent = false, text, icon }: Props) {
  return (
    <Link href={href}>
      <a
        role="menuitem"
        aria-current={ariaCurrent}
        className="px-2 py-1 text-lg font-medium transition-colors duration-200 transform rounded text-primary hover:bg-primary-focus hover:text-primary-content md:mx-2"
      >
        {icon ? <i className={`fa fa-${icon}`}>{text}</i> : text}
      </a>
    </Link>
  )
}

export default NavigationLink
