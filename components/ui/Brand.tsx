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
  <div className="flex-1 px-2 mx-2">
    <img src={logo} alt={alt} width={64} height={64} />
    {brandName && <span className="px-2 text-lg font-bold">{brandName}</span>}
  </div>
)

export default Brand
