import FormStep from "@components/FormStep/FormStep";
import { FORM_STEPS } from "@lib/form.constant";
import { ValidFormStep } from "@lib/types";

interface Props {
  activeStep: ValidFormStep;
}

const FormStepGroup = ({ activeStep }: Props) => {
  return (
    <div>
      {FORM_STEPS.map((fs, idx) => (
        <div key={idx} className="px-2 inline lg:block lg:py-4">
          <FormStep {...fs} isActive={fs.step == activeStep} />
        </div>
      ))}
    </div>
  );
};

export default FormStepGroup;
