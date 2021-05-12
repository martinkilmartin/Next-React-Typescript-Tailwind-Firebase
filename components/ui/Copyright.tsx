type Props = {
  organization?: string
}

const Copyright = ({
  organization: organization = 'Awesome Company',
}: Props) => (
  <p>{`© ${new Date().getFullYear()} ${organization} All rights reserved.`}</p>
)

export default Copyright
