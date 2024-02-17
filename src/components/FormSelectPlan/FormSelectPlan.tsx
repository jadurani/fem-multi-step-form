import PlanOption, { PlanOptionType } from "@components/PlanOption/PlanOption";
import PlanToggle, { PlanDuration } from "@components/PlanToggle/PlanToggle";
import { useState } from "react";

interface SelectPlanProps {
  selectedPlan: PlanOptionType | null;
  duration: PlanDuration;
}

const FormSelectPlan = () => {
  const [formData, setFormData] = useState<SelectPlanProps>({
    selectedPlan: null,
    duration: "monthly",
  });

  return (
    <div>
      <div className="text-denim font-bold text-h4 md:text-h3">
        Select your plan
      </div>
      <div className="text-grey">
        You have the option of monthly or yearly billing.
      </div>

      {/* arcade */}
      <div className="py-2">
        <PlanOption
          checked={formData.selectedPlan === "arcade"}
          id="arcade"
          duration={formData.duration}
          handleClick={(id, value) =>
            setFormData({
              ...formData,
              selectedPlan: id,
            })
          }
        />
      </div>

      {/* advanced */}
      <div className="py-2">
        <PlanOption
          checked={formData.selectedPlan === "advanced"}
          id="advanced"
          duration={formData.duration}
          handleClick={(id, value) =>
            setFormData({
              ...formData,
              selectedPlan: id,
            })
          }
        />
      </div>

      {/* pro */}
      <div className="py-2">
        <PlanOption
          checked={formData.selectedPlan === "pro"}
          id="pro"
          duration={formData.duration}
          handleClick={(id, value) =>
            setFormData({
              ...formData,
              selectedPlan: id,
            })
          }
        />
      </div>

      {/* toggle */}
      <div className="py-2">
        <PlanToggle
          value={formData.duration}
          handleToggle={(value) =>
            setFormData({ ...formData, duration: value })
          }
        />
      </div>
    </div>
  );
};

export default FormSelectPlan;
