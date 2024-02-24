export type PlanDuration = "monthly" | "yearly";
export type OptionType = "online" | "storage" | "profile";
export type PlanOptionType = "arcade" | "advanced" | "pro";
export type ValidFormStep = 1 | 2 | 3 | 4;

export interface ButtonProps {
  type?: 'submit' | 'button' | 'reset'
  children: string;
  color: "denim" | "purple";
  handleClick?: () => void;
}

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}

export interface SelectPlanProps {
  selectedPlan: PlanOptionType;
  duration: PlanDuration;
}

export interface PickAddOnProps {
  online: boolean;
  storage: boolean;
  profile: boolean;
}

export interface PlanToggleProps {
  value: PlanDuration;
  handleToggle: (value: PlanDuration) => void;
}

export interface PlanOptionProps {
  checked: boolean;
  id: PlanOptionType;
  duration: PlanDuration;
  handleClick: (id: PlanOptionType, value: boolean) => void;
}

export interface AddOnOptionProps {
  checked: boolean;
  id: OptionType;
  title: string;
  subtitle: string;
  duration: PlanDuration;
  handleClick: (id: OptionType, value: boolean) => void;
}

export type MultiStepFormState = {
  activeStep: ValidFormStep;
  errors: Map<string, any> | null;
} & PersonalInfo & SelectPlanProps & PickAddOnProps;
