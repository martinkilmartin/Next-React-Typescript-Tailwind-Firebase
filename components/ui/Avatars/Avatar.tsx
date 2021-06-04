type Props = {
  image: JSX.Element
  index?: number
}

const Avatar = ({ image, index }: Props) => (
  <div className="avatar" key={index ?? undefined}>
    <div className="w-20 h-20 mb-8 rounded-full sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-48 2xl:h-48 ring ring-primary ring-offset-base-100 ring-offset-2">
      {image}
    </div>
  </div>
)

export default Avatar
