import { ReactNode } from 'react'

type Props = {
  backgroundImage: string
  children?: ReactNode
}

const ImageBackground = ({ children, backgroundImage }: Props) => (
  <div className={backgroundImage + ' hero min-h-screen'}>
    <div className="hero-overlay bg-opacity-60"></div>
    {children}
  </div>
)

export default ImageBackground
