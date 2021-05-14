import Link from 'next/link'

type Props = {
  href: string
  text: string
  icon?: string
  styles?: string
}

const DivButtonLink = ({ href, text, icon, styles }: Props) => (
  <Link href={href}>
    <a className={styles}>
      {icon ? <i className={`fa fa-${icon}`}>{text}</i> : text}
    </a>
  </Link>
)

export default DivButtonLink
