import Open from '../../icons/ChevronDown'
import Close from '../../icons/Close'

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
    className="items-center justify-center block p-2 text-gray-400 rounded-md sm:inline-flex hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    aria-controls={ariaControl}
    aria-expanded="false"
    onClick={() => setOpen(!open)}
  >
    <span className="sr-only">{sRMessage}</span>
    {open ? <Close /> : <Open />}
  </button>
)

export default MenuButton
