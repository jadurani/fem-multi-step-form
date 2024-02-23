import { MultiStepFormState, PersonalInfo, PickAddOnProps, PlanDuration, PlanOptionType, ValidFormStep } from "./types";

export const initialState: MultiStepFormState = {
  activeStep: 1,
  errors: null,
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

export type SetErrors = {
  type: 'SET_ERRORS',
  fieldName: string;
  error: string | null;
}

export type SetFormErrors = {
  type: 'SET_FORM_ERRORS',
  formErrors: Array<{ fieldName: string; error: string | null }>
}

export type ActionTypes = UpdateStepForward
  | UpdateStepBackward
  | UpdatePersonalInfo
  | UpdateSelectedPlan
  | UpdatePlanDuration
  | UpdateAddOnOption
  | SetErrors
  | SetFormErrors;

export function multiStepFormReducer(state: MultiStepFormState, action: ActionTypes): MultiStepFormState {
  console.log(action)
  switch (action.type) {
    case 'FORM_STEP_BACKWARD': {
      if (state.errors) {
        return { ...state }
      }

      return {
        ...state,
        activeStep: state.activeStep - 1 as ValidFormStep
      }
    }
    case 'FORM_STEP_FORWARD': {
      if (state.errors) {
        return { ...state }
      }

      return {
        ...state,
        activeStep: state.activeStep + 1 as ValidFormStep
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

    case 'SET_ERRORS': {
      const { fieldName, error } = action;
      const errors = new Map<string, string>(state.errors);

      // remove from errors map
      if (!error) {
        errors.delete(fieldName)
      } else {
        errors.set(fieldName, error)
      }

      return {
        ...state,
        errors
      }
    }

    case 'SET_FORM_ERRORS': {
      const newErrors = action.formErrors;
      const errors = new Map<string, any>(state.errors);

      // remove from errors map
      for (const [fieldName, newError] of Object.entries(newErrors)) {

        if (!newError) {
          errors.delete(fieldName)
          continue;
        }

        errors.set(fieldName, newError)
      }

      return {
        ...state,
        errors
      }
    }

    default: {
      throw Error('Unknown action: ' + action);
    }
  }
}