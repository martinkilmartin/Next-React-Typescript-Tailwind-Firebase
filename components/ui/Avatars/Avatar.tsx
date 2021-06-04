type Props = {
  image: JSX.Element
}

const Avatar = ({ image }: Props) => (
  <div className="avatar">
    <div className="w-10 h-10 mb-8 rounded-full sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-36 xl:h-36 2xl:w-48 2xl:h-48 ring ring-primary ring-offset-base-100 ring-offset-2">
      {image}
    </div>
  </div>
)

export default Avatar
