"use client";

import FormPersonalInfo from "@components/FormPersonalInfo/FormPersonalInfo";
import FormPickAddOn from "@components/FormPickAddOn/FormPickAddOn";
import FormSelectPlan from "@components/FormSelectPlan/FormSelectPlan";
import FormStepGroup from "@components/FormStepGroup/FormStepGroup";
import FormSummary from "@components/FormSummary/FormSummary";
import { FormContext, FormDispatchContext } from "@lib/formContext";
import { initialState, multiStepFormReducer } from "@lib/formReducer";
import { useReducer } from "react";

export default function Home() {
  const [state, dispatch] = useReducer(multiStepFormReducer, initialState);
  const { activeStep, selectedPlan, duration, online, storage, profile } =
    state;

  return (
    <FormContext.Provider value={state}>
      <FormDispatchContext.Provider value={dispatch}>
        <main className="">
          <FormStepGroup activeStep={activeStep} />

          <div hidden={activeStep != 1}>
            <FormPersonalInfo />
          </div>

          <div hidden={activeStep != 2}>
            <FormSelectPlan selectedPlan={selectedPlan} duration={duration} />
          </div>

          <div hidden={activeStep != 3}>
            <FormPickAddOn
              online={online}
              storage={storage}
              profile={profile}
            />
          </div>

          <div hidden={activeStep != 4}>
            <FormSummary />
          </div>

          {/* <div>DISABLED: {`${Boolean(state.errors)}`}</div> */}
          {/* <Button
            color="denim"
            handleClick={() => dispatch({ type: "FORM_STEP_BACKWARD" })}>
            Previous
          </Button>
          <Button
            color="denim"
            handleClick={() => dispatch({ type: "FORM_STEP_FORWARD" })}>
            Next
          </Button> */}
        </main>
      </FormDispatchContext.Provider>
    </FormContext.Provider>
  );
}
