import { PlanOptionType } from "@components/PlanOption/PlanOption";

export type PlanDuration = "monthly" | "yearly";

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}

export interface SelectPlanProps {
  selectedPlan: PlanOptionType | null;
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
