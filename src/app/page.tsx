"use client";

import Button from "@components/Button/Button";
import FormStepGroup from "@components/FormStepGroup/FormStepGroup";
import { initialState, multiStepFormReducer } from "@lib/formReducer";
import { useReducer } from "react";

export default function Home() {
  const [state, dispatch] = useReducer(multiStepFormReducer, initialState);
  return (
    <main className="">
      <FormStepGroup activeStep={state.activeStep} />

      <Button
        color="denim"
        handleClick={() => dispatch({ type: "FORM_STEP_BACKWARD" })}>
        Previous
      </Button>

      <Button
        color="denim"
        handleClick={() => dispatch({ type: "FORM_STEP_FORWARD" })}>
        Next
      </Button>
    </main>
  );
}
