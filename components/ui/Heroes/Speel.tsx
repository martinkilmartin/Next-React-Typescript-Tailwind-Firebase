type Props = {
  speel: string | JSX.Element
}

const Speel = ({ speel }: Props) => (
  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
    {speel}
  </p>
)

export default Speel
