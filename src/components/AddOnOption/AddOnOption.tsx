import iconCheckmark from "@assets/icons/icon-checkmark.svg";
import { AddOnOptionProps } from "@lib/types";
import Image from "next/image";

const AddOnOption = ({
  checked,
  id,
  title,
  subtitle,
  price,
  handleClick,
}: AddOnOptionProps) => {
  return (
    <button
      onClick={() => handleClick(id, !checked)}
      className={`flex w-full gap-4 p-6 items-center rounded-md border border-grey-light hover:border-purple ${checked ? "bg-grey-veryLight border-purple" : ""}`}>
      <span
        className={`inline-flex items-center justify-center h-[20px] w-[20px] rounded-md border ${checked ? "bg-purple" : "border-grey-light"}`}>
        <Image src={iconCheckmark} alt="" />
      </span>
      <span className="flex-grow text-start">
        <span className="block text-denim font-medium">{title}</span>
        <span className="block text-grey text-[14px]">{subtitle}</span>
      </span>
      <span className="text-[14px] text-purple">+${price}/yr</span>
    </button>
  );
};

export default AddOnOption;
