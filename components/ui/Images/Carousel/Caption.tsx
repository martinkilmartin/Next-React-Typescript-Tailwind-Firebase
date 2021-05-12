type Props = {
  title: string
  description: string
}

const Caption = ({ title, description }: Props) => (
  <div>
    <h3>
      <a href="#">{title}</a>
    </h3>
    <div>
      <p>
        <span>{description}</span>
      </p>
    </div>
  </div>
)
export default Caption
