import iconAdvanced from "@assets/icons/icon-advanced.svg";
import iconArcade from "@assets/icons/icon-arcade.svg";
import iconPro from "@assets/icons/icon-pro.svg";
import { PlanDuration, PlanOptionProps } from "@lib/types";
import Image from "next/image";

export type PlanOptionType = "arcade" | "advanced" | "pro";

const MONTHLY_PLAN_PRICES: Record<PlanOptionType, number> = {
  arcade: 9,
  advanced: 12,
  pro: 15,
};

const YEARLY_PLAN_PRICES: Record<PlanOptionType, number> = {
  arcade: 90,
  advanced: 120,
  pro: 150,
};

const DICT_IMAGE_SRC: Record<PlanOptionType, any> = {
  arcade: iconArcade,
  advanced: iconAdvanced,
  pro: iconPro,
};

const DURATION_ABBV: Record<PlanDuration, string> = {
  monthly: "mo",
  yearly: "yr",
};

const PlanOption = ({
  checked,
  id,
  duration,
  handleClick,
}: PlanOptionProps) => {
  const price =
    duration === "monthly" ? MONTHLY_PLAN_PRICES[id] : YEARLY_PLAN_PRICES[id];

  return (
    <button
      onClick={() => handleClick(id, !checked)}
      className={`py-3 px-4 flex items-center gap-4 md:h-44 w-full md:flex-col md:items-start md:justify-between rounded-md border border-grey-light hover:border-purple ${checked ? "bg-grey-veryLight border-purple" : ""}`}>
      <Image src={DICT_IMAGE_SRC[id]} alt="" />
      <span className="text-start">
        <span className="block capitalize font-medium text-denim">{id}</span>
        <span className="block text-grey text-[14px]">
          ${price}/{DURATION_ABBV[duration]}
        </span>
        <span
          className={`block text-body2 text-denim ${duration === "monthly" && "hidden"}`}>
          2 months free
        </span>
      </span>
    </button>
  );
};

export default PlanOption;
