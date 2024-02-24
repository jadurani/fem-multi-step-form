import AddOnOption from "@components/AddOnOption/AddOnOption";
import Button from "@components/Button/Button";
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

      <div className="py-2">
        <AddOnOption
          checked={formData.online}
          id="online"
          title="Online service"
          subtitle="Access to multiplayer games"
          duration={formData.duration}
          handleClick={setFormData}
        />
      </div>

      <div className="py-2">
        <AddOnOption
          checked={formData.storage}
          id="storage"
          title="Larger storage"
          subtitle="Extra 1TB of cloud save"
          duration={formData.duration}
          handleClick={setFormData}
        />
      </div>

      <div className="py-2">
        <AddOnOption
          checked={formData.profile}
          id="profile"
          title="Customizable profile"
          subtitle="Custom theme on your profile"
          duration={formData.duration}
          handleClick={setFormData}
        />
      </div>

      <Button
        color="denim"
        handleClick={() =>
          dispatch({ type: "UPDATE_FORM_STEP", activeStep: 2 })
        }>
        Previous
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
