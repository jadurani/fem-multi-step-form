import { MultiStepFormState, PersonalInfo, PickAddOnProps, PlanDuration, PlanOptionType } from "./types";

export const initialFormState: MultiStepFormState = {
  activeStep: 1,
  name: "",
  email: "",
  phone: "",
  selectedPlan: null,
  duration: "monthly",
  online: false,
  storage: false,
  profile: false,
}

export type UpdateStepForward = {
  type: 'FORM_STEP_FORWARD',
};

export type UpdateStepBackward = {
  type: 'FORM_STEP_BACKWARD',
};

export type UpdatePersonalInfo = {
  type: 'UPDATE_PERSONAL_INFO'
} & PersonalInfo;

export type UpdateSelectedPlan = {
  type: 'UPDATE_SELECTED_PLAN',
  selectedPlan: PlanOptionType;
}

export type UpdatePlanDuration = {
  type: 'UPDATE_PLAN_DURATION',
  duration: PlanDuration;
}

export type UpdateAddOnOption = {
  type: 'UPDATE_ADD_ON',
} & PickAddOnProps;

export type ActionTypes = UpdateStepForward
  | UpdateStepBackward
  | UpdatePersonalInfo
  | UpdateSelectedPlan
  | UpdatePlanDuration
  | UpdateAddOnOption;

export function messengerReducer(state: MultiStepFormState, action: ActionTypes) {
  switch (action.type) {
    case 'FORM_STEP_BACKWARD': {
      return {
        ...state,
        activeStep: state.activeStep - 1
      }
    }
    case 'FORM_STEP_FORWARD': {
      return {
        ...state,
        activeStep: state.activeStep + 1
      }
    }
    case 'UPDATE_PERSONAL_INFO': {
      return {
        ...state,
        name: action.name,
        email: action.email,
        phone: action.phone,
      }
    }
    case 'UPDATE_SELECTED_PLAN': {
      return {
        ...state,
        selectedPlan: action.selectedPlan
      }
    }
    case 'UPDATE_ADD_ON': {
      return {
        ...state,
        online: state.online,
        storage: state.storage,
        profile: state.profile,
      }
    }
    case 'UPDATE_PLAN_DURATION': {
      return {
        ...state,
        online: state.online,
        storage: state.storage,
        profile: state.profile,
      }
    }

    default: {
      throw Error('Unknown action: ' + action);
    }
  }
}