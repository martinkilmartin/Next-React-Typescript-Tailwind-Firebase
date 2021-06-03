import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Container = ({ children }: Props) => (
  <div className="container max-w-full px-4 mx-auto lg:max-w-screen-xl 2xl:max-w-screen-2xl">
    {children}
  </div>
)

export default Container
