import { PlanToggleProps } from "@lib/types";

const PlanToggle = ({ value, handleToggle }: PlanToggleProps) => {
  return (
    <div className="bg-grey-veryLight p-3 flex items-center justify-center gap-5 font-medium rounded-md">
      <span
        className={`capitalize ${value === "monthly" ? "text-denim" : "text-grey"}`}>
        monthly
      </span>
      <button
        onClick={() =>
          handleToggle(value === "monthly" ? "yearly" : "monthly")
        }>
        <svg
          className={value === "monthly" ? "" : "-scale-x-100"}
          width="38"
          height="20"
          viewBox="0 0 38 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="38" height="20" rx="10" fill="#022959" />
          <circle cx="10" cy="10" r="6" fill="white" />
        </svg>
      </button>
      <span
        className={`capitalize ${value === "yearly" ? "text-denim" : "text-grey"}`}>
        yearly
      </span>
    </div>
  );
};

export default PlanToggle;
