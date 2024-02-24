import AddOnOption from "@components/AddOnOption/AddOnOption";
import Button from "@components/Button/Button";
import { ADD_ONS } from "@lib/form.constant";
import { FormContext, FormDispatchContext } from "@lib/formContext";
import { OptionType, PickAddOnProps } from "@lib/types";
import { useContext } from "react";

const FormPickAddOn = (props: PickAddOnProps) => {
  const formData = useContext(FormContext);
  const dispatch = useContext(FormDispatchContext);

  const setFormData = (id: OptionType, value: boolean) => {
    dispatch({
      type: "UPDATE_ADD_ON",
      [id]: value,
    });
  };

  return (
    <div>
      <div className="text-denim font-bold text-h4 md:text-h3">
        Pick add-ons
      </div>
      <div className="text-grey">
        Add-ons help enhance your gaming experience.
      </div>

      {ADD_ONS.map(({ id, title, subtitle }, idx) => (
        <div className="py-2" key={idx}>
          <AddOnOption
            checked={formData[id]}
            id={id}
            title={title}
            subtitle={subtitle}
            duration={formData.duration}
            handleClick={setFormData}
          />
        </div>
      ))}

      <Button
        style="clear"
        handleClick={() =>
          dispatch({ type: "UPDATE_FORM_STEP", activeStep: 2 })
        }>
        Go Back
      </Button>

      <Button
        color="denim"
        handleClick={() =>
          dispatch({ type: "UPDATE_FORM_STEP", activeStep: 4 })
        }>
        Next
      </Button>
    </div>
  );
};

export default FormPickAddOn;
