import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  style?: string
}

const Container = ({
  children,
  style = 'container max-w-full px-4 mx-auto lg:max-w-screen-xl 2xl:max-w-screen-2xl',
}: Props) => <div className={style}>{children}</div>

export default Container
