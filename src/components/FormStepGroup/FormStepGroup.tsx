import FormStep from "@components/FormStep/FormStep";
import { ValidFormStep } from "@lib/types";

const FORM_STEPS = [
  {
    step: 1,
    title: "Your Info",
  },
  {
    step: 2,
    title: "Select Plan",
  },
  {
    step: 3,
    title: "Add-Ons",
  },
  {
    step: 4,
    title: "Summary",
  },
];

interface Props {
  activeStep: ValidFormStep;
}

const FormStepGroup = ({ activeStep }: Props) => {
  return (
    <div>
      {FORM_STEPS.map((fs, idx) => (
        <div key={idx} className="px-2 inline md:block md:py-4">
          <FormStep {...fs} isActive={fs.step == activeStep} />
        </div>
      ))}
    </div>
  );
};

export default FormStepGroup;
