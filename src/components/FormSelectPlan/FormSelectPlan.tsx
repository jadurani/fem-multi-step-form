import Button from "@components/Button/Button";
import PlanOption from "@components/PlanOption/PlanOption";
import PlanToggle from "@components/PlanToggle/PlanToggle";
import { FormContext, FormDispatchContext } from "@lib/formContext";
import { PlanDuration, PlanOptionType } from "@lib/types";
import { useContext } from "react";

const FormSelectPlan = () => {
  const formData = useContext(FormContext);
  const dispatch = useContext(FormDispatchContext);

  const setFormData = (selectedPlan: PlanOptionType) => {
    dispatch({
      type: "UPDATE_SELECTED_PLAN",
      selectedPlan,
    });
  };

  const handleDurationToggle = (duration: PlanDuration) => {
    dispatch({
      type: "UPDATE_PLAN_DURATION",
      duration,
    });
  };

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
          handleClick={(id, _) => setFormData(id)}
        />
      </div>

      {/* advanced */}
      <div className="py-2">
        <PlanOption
          checked={formData.selectedPlan === "advanced"}
          id="advanced"
          duration={formData.duration}
          handleClick={(id, _) => setFormData(id)}
        />
      </div>

      {/* pro */}
      <div className="py-2">
        <PlanOption
          checked={formData.selectedPlan === "pro"}
          id="pro"
          duration={formData.duration}
          handleClick={(id, _) => setFormData(id)}
        />
      </div>

      {/* toggle */}
      <div className="py-2">
        <PlanToggle
          value={formData.duration}
          handleToggle={handleDurationToggle}
        />
      </div>

      <div className="flex justify-between">
        <Button
          style="clear"
          handleClick={() =>
            dispatch({ type: "UPDATE_FORM_STEP", activeStep: 1 })
          }>
          Go Back
        </Button>

        <Button
          color="denim"
          handleClick={() =>
            dispatch({ type: "UPDATE_FORM_STEP", activeStep: 3 })
          }>
          Next
        </Button>
      </div>
    </div>
  );
};

export default FormSelectPlan;
