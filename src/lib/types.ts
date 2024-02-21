import { PlanOptionType } from "@components/PlanOption/PlanOption";
import { PlanDuration } from "@components/PlanToggle/PlanToggle";

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}

export interface SelectPlanProps {
  selectedPlan: PlanOptionType | null;
  duration: PlanDuration;
}
