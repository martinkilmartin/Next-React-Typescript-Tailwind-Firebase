type Props = {
  organization?: string
}

const Copyright = ({ organization: organization = 'Yoo.ie' }: Props) => (
  <div className="flex items-center justify-center pt-10 font-light text-center sm:pt-12">{`© ${new Date().getFullYear()} ${organization} All rights reserved.`}</div>
)

export default Copyright
