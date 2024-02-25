interface Props {
  step: number;
  title: string;
  isActive?: boolean;
}

const FormStep = ({ step, title, isActive = false }: Props) => {
  return (
    <label className="inline-flex gap-4 items-center">
      <span
        className={`${isActive ? "text-denim bg-skyBlue" : "border border-white text-white bg-transparent"} font-bold h-8 w-8 rounded-full flex items-center justify-center`}>
        {step}
      </span>
      <span className="hidden lg:block leading-tight">
        <span className="block uppercase text-lightBlue text-body2">
          step {step}
        </span>
        <span className="block uppercase text-white text-body1 font-bold tracking-wide">
          {title}
        </span>
      </span>
    </label>
  );
};

export default FormStep;
