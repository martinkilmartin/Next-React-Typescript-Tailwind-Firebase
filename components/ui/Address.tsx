function Address() {
  const EMAIL = process.env.NEXT_PUBLIC_COMPANY_EMAIL ?? null
  const PHONE = process.env.NEXT_PUBLIC_COMPANY_PHONE ?? null
  const ADD_L1 = process.env.NEXT_PUBLIC_COMPANY_ADDRESS_LINE_1 ?? null
  const ADD_L2 = process.env.NEXT_PUBLIC_COMPANY_ADDRESS_LINE_2 ?? null
  const UNIT = process.env.NEXT_PUBLIC_COMPANY_ADDRESS_UNIT ?? null
  const STREET_NUMBER =
    process.env.NEXT_PUBLIC_COMPANY_ADDRESS_STREET_NUMBER ?? null
  const STREET_NAME =
    process.env.NEXT_PUBLIC_COMPANY_ADDRESS_STREET_NAME ?? null
  const ADD_L3 = UNIT + ' ' + STREET_NUMBER + ' ' + STREET_NAME ?? null
  const VILLAGE = process.env.NEXT_PUBLIC_COMPANY_ADDRESS_VILLAGE ?? null
  const TOWN = process.env.NEXT_PUBLIC_COMPANY_ADDRESS_TOWN ?? null
  const COUNTY = process.env.NEXT_PUBLIC_COMPANY_ADDRESS_COUNTY ?? null
  const CITY = process.env.NEXT_PUBLIC_COMPANY_ADDRESS_CITY ?? null
  const POSTCODE = process.env.NEXT_PUBLIC_COMPANY_ADDRESS_POSTCODE ?? null
  const COUNTRY = process.env.NEXT_PUBLIC_COMPANY_ADDRESS_COUNTRY ?? null
  return (
    <address>
      {EMAIL && <a href={`mailto:${EMAIL}`}>{EMAIL}</a>}
      {EMAIL && <br />}
      {PHONE && <a href={`tel:${PHONE}`}>{PHONE}</a>}
      {PHONE && <br />}
      {ADD_L1 && ADD_L1}
      {ADD_L1 && <br />}
      {ADD_L2 && ADD_L2}
      {ADD_L2 && <br />}
      {ADD_L3.trim()?.length && ADD_L3}
      {ADD_L3.trim()?.length && <br />}
      {VILLAGE && VILLAGE}
      {VILLAGE && <br />}
      {TOWN && TOWN}
      {TOWN && <br />}
      {COUNTY && COUNTY}
      {COUNTY && <br />}
      {CITY && CITY}
      {CITY && <br />}
      {POSTCODE && POSTCODE}
      {POSTCODE && <br />}
      {COUNTRY && COUNTRY}
      {COUNTRY && <br />}
    </address>
  )
}

export default Address
