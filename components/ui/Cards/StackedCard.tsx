import { ReactNode } from 'react'

import SimpleHashTag from '../Tags/SimpleHashTag'

type Props = {
  image: ReactNode
  title: string
  description: string
  tags?: [string]
}

const StackedCard = ({ image, title, description, tags }: Props) => (
  <div className="max-w-sm ml-4 mr-4 overflow-hidden rounded shadow-lg">
    {image}
    <div className="px-6 py-4 -mt-2 bg-gray-100 bg-opacity-90">
      <div className="mb-2 text-xl font-bold">{title}</div>
      <p className="text-base text-black">{description}</p>
    </div>
    {tags?.length ? (
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag) => {
          ;<SimpleHashTag tag={tag} />
        })}
      </div>
    ) : (
      ''
    )}
  </div>
)

export default StackedCard
