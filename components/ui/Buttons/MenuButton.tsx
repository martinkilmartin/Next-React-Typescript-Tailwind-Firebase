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
  <button
    type="button"
    className="ml-10 mr-0 btn btn-square btn-primary"
    aria-controls={ariaControl}
    aria-expanded="false"
    aria-label="toggle menu"
    onClick={() => setOpen(!open)}
  >
    <span className="sr-only">{sRMessage}</span>
    {open ? <Close /> : <Open />}
  </button>
)

export default MenuButton
