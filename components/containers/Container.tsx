import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  style?: string
}

const Container = ({ children, style = 'container px-2 sm:px-4' }: Props) => (
  <div className={style}>{children}</div>
)

export default Container
