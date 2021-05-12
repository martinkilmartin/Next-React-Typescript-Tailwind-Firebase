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
      <a role="menuitem" aria-current={ariaCurrent}>
        {icon ? <i className={`fa fa-${icon}`}>{text}</i> : text}
      </a>
    </Link>
  )
}

export default NavigationLink
