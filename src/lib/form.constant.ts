import iconAdvanced from "@assets/icons/icon-advanced.svg";
import iconArcade from "@assets/icons/icon-arcade.svg";
import iconPro from "@assets/icons/icon-pro.svg";
import { OptionType, PlanDuration, PlanOptionType } from "./types";

export const FORM_STEPS = [
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

export type AddOnType = {
  id: OptionType,
  title: string;
  subtitle: string;
}

export const ADD_ONS: Array<AddOnType> = [
  {
    id: "online",
    title: "Online service",
    subtitle: "Access to multiplayer games"
  },
  {
    id: "storage",
    title: "Larger storage",
    subtitle: "Extra 1TB of cloud save"
  },
  {
    id: "profile",
    title: "Customizable profile",
    subtitle: "Custom theme on your profile"
  },
]

export const MONTHLY_PLAN_PRICES: Record<PlanOptionType, number> = {
  arcade: 9,
  advanced: 12,
  pro: 15,
};

export const YEARLY_PLAN_PRICES: Record<PlanOptionType, number> = {
  arcade: 90,
  advanced: 120,
  pro: 150,
};

export const PLAN_PRICES: Record<PlanDuration, Record<PlanOptionType, number>> = {
  monthly: {
    arcade: 9,
    advanced: 12,
    pro: 15,
  },
  yearly: {
    arcade: 90,
    advanced: 120,
    pro: 150,
  },
}

export const ADD_ON_PRICES: Record<PlanDuration, Record<OptionType, number>> = {
  monthly: {
    online: 1,
    storage: 2,
    profile: 2
  },
  yearly: {
    online: 10,
    storage: 20,
    profile: 20
  }
}

export const DICT_IMAGE_SRC: Record<PlanOptionType, any> = {
  arcade: iconArcade,
  advanced: iconAdvanced,
  pro: iconPro,
};

export const DURATION_ABBV: Record<PlanDuration, string> = {
  monthly: "mo",
  yearly: "yr",
};
