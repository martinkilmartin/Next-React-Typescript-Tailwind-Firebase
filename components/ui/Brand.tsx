type Props = {
  brandName?: string
  alt?: string
  logo?: string
}

const Brand = ({
  brandName = 'Yoo.ie',
  alt = brandName,
  logo = '/logos/shamrock.png',
}: Props) => (
  <>
    <img src={logo} alt={alt} width={64} height={64} />
    {brandName && (
      <span className="px-2 text-lg font-bold text-primary">{brandName}</span>
    )}
  </>
)

export default Brand
