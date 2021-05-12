type Props = {
  alt?: string
  logo?: string
}

const Brand = ({ alt = 'Yoo.ie', logo = '/logo-dark.svg' }: Props) => (
  <img src={logo} alt={alt} width={64} height={64} />
)

export default Brand
