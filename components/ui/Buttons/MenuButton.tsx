import Open from '../../icons/Menu'
import Close from '../../icons/Cross'

type Props = {
  ariaControl: string
  open: boolean
  setOpen: (o: boolean) => void
  sRMessage: string
}

const MenuButton = ({
  ariaControl,
  open = false,
  setOpen,
  sRMessage,
}: Props) => (
  <div className="flex-none">
    <button
      type="button"
      className="btn btn-square btn-primary"
      aria-controls={ariaControl}
      aria-expanded="false"
      onClick={() => setOpen(!open)}
    >
      <span className="sr-only">{sRMessage}</span>
      {open ? <Close /> : <Open />}
    </button>
  </div>
)

export default MenuButton
