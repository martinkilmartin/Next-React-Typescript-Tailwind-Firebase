import Image from 'next/image'

type Props = {
  ariaControl: string
  open: boolean
  setOpen: (o: boolean) => void
}

const MenuButton = ({ ariaControl, open = false, setOpen }: Props) => (
  <button
    type="button"
    className="items-center justify-center block p-2 text-gray-400 rounded-md sm:inline-flex hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    aria-controls={ariaControl}
    aria-expanded="false"
    onClick={() => setOpen(!open)}
  >
    <span className="sr-only">Open main menu</span>
    {open ? (
      <Image src="/menu-close.svg" alt="Close" width={24} height={24} />
    ) : (
      <Image src="/menu-open.svg" alt="Open" width={24} height={24} />
    )}
  </button>
)

export default MenuButton
