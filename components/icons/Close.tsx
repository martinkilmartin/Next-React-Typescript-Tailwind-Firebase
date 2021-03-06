const Close = ({ ...props }) => {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      className="inline-block w-6 h-6 stroke-current"
      {...props}
    >
      <g>
        <path d="m19.07 4.93a10 10 0 0 0 -14.14 14.14 10 10 0 0 0 14.14-14.14zm-2.81 9.91a1 1 0 0 1 0 1.42 1 1 0 0 1 -.71.29 1 1 0 0 1 -.71-.29l-2.84-2.85-2.84 2.85a1 1 0 0 1 -.71.29 1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.42l2.85-2.84-2.85-2.84a1 1 0 1 1 1.42-1.42l2.84 2.85 2.84-2.85a1 1 0 1 1 1.42 1.42l-2.85 2.84z" />
      </g>
    </svg>
  )
}

export default Close
