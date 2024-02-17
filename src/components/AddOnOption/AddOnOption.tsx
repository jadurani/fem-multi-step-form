"use client";

import iconCheckmark from "@assets/icons/icon-checkmark.svg";
import Image from "next/image";

export type OptionType = "online" | "storage" | "profile";

interface Props {
  checked: boolean;
  id: OptionType;
  title: string;
  subtitle: string;
  price: number;
  handleClick: (id: OptionType, value: boolean) => void;
}

const AddOnOption = ({
  checked,
  id,
  title,
  subtitle,
  price,
  handleClick,
}: Props) => {
  const isChecked = checked;

  return (
    <button
      onClick={() => handleClick(id, !isChecked)}
      className={`flex gap-4 p-6 items-center rounded-md border border-grey-light hover:border-purple ${isChecked ? "bg-grey-veryLight border-purple" : ""}`}>
      <span
        className={`inline-flex items-center justify-center h-[20px] w-[20px] rounded-md border ${isChecked ? "bg-purple" : "border-grey-light"}`}>
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
