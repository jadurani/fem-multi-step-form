import FormStep from "@components/FormStep/FormStep";

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
  activeStep: 1 | 2 | 3 | 4;
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
