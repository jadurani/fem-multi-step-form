interface Props {
  children: string;
  color: "denim" | "purple";
  handleClick: () => void;
}

function Button({ children, color, handleClick }: Props) {
  return (
    <button
      onClick={handleClick}
      className={`text-white font-medium capitalize rounded-md py-3 px-5 ${color === "denim" ? "bg-denim hover:bg-denim/85" : "bg-purple hover:bg-purple/85"}`}>
      {children}
    </button>
  );
}

export default Button;
