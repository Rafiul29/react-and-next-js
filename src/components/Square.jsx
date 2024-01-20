// eslint-disable-next-line react/prop-types
export default function Square({ value,onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      className="bg-white  border border-gray-400 h-12  w-12 m-1  rounded-md leading-9 text-lg cursor-pointer"
    >
      {value}
    </button>
  );
}
