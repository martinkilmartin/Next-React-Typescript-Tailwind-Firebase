import React, { ReactNode } from 'react'

type Props = {
  backgroundImage: string
  children?: ReactNode
}

const ImageBackground = ({ children, backgroundImage }: Props) => (
  <div
    className={
      backgroundImage +
      ' backdrop-opacity-0 relative bg-responsive bg-cover bg-no-repeat min-h-1/2'
    }
  >
    {children}
  </div>
)

export default ImageBackground
