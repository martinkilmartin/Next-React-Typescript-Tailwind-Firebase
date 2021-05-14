import DivButtonLink from './DivButtonLink'

type Props = {
  href: string
  text: string
  icon?: string
  styles?: string
  first?: boolean
}

const DivButton = ({ href, text, icon, first, styles }: Props) => (
  <div
    className={first ? 'rounded-md shadow' : 'mt-3 sm:mt-0 sm:ml-3'}
    role="button"
  >
    <DivButtonLink href={href} text={text} styles={styles} icon={icon} />
  </div>
)

export default DivButton
