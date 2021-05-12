import { GetStaticProps } from 'next'

type Props = {
  email?: string
  telephone?: string
  address?: string[]
}

const Address = ({ address, email, telephone }: Props) => (
  <address>
    {email && <a href={`${email}`}>{email}</a>}
    {email && <br />}
    {telephone && <a href={`tel:${telephone}`}>{telephone}</a>}
    {telephone && <br />}
    {address && address.map((addressLine) => addressLine + '<br />')}
  </address>
)

export const getStaticProps: GetStaticProps = async () => {
  const address: string[] = process.env.NEXT_PUBLIC_COMPANY_ADDRESS
    ? process.env.NEXT_PUBLIC_COMPANY_ADDRESS.split(' ')
    : ['a', 'b', 'c']
  const email: string = process.env.NEXT_PUBLIC_COMPANY_EMAIL ?? 'me@company.ie'
  const telephone: string =
    process.env.NEXT_PUBLIC_COMPANY_PHONE ?? '+3530887654321'
  return { props: { address, email, telephone } }
}

export default Address
