type Props = {
  label: string;
};

const SimpleButton = ({ label }: Props) => (
  <button
    type="button"
    className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
  >
    <b>{label}</b>
  </button>
);

export default SimpleButton;
