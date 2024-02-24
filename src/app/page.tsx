"use client";

import FormPersonalInfo from "@components/FormPersonalInfo/FormPersonalInfo";
import FormPickAddOn from "@components/FormPickAddOn/FormPickAddOn";
import FormSelectPlan from "@components/FormSelectPlan/FormSelectPlan";
import FormStepGroup from "@components/FormStepGroup/FormStepGroup";
import FormSummary from "@components/FormSummary/FormSummary";
import { FormContext, FormDispatchContext } from "@lib/formContext";
import { initialState, multiStepFormReducer } from "@lib/formReducer";
import Image from "next/image";
import { useReducer } from "react";

import desktopBg from "@assets/images/bg-sidebar-desktop.svg";

export default function Home() {
  const [state, dispatch] = useReducer(multiStepFormReducer, initialState);
  const { activeStep, online, storage, profile } = state;

  return (
    <FormContext.Provider value={state}>
      <FormDispatchContext.Provider value={dispatch}>
        <main className="h-screen flex items-center justify-center">
          <div className="w-[940px] h-[600px] bg-white p-4 flex ">
            <div className="relative">
              <div className="p-8 absolute z-10">
                <FormStepGroup activeStep={activeStep} />
              </div>

              <Image src={desktopBg} alt="" />
            </div>

            <div className="py-6 w-[450px] mx-auto">
              <div className="h-full" hidden={activeStep != 1}>
                <FormPersonalInfo />
              </div>

              <div className="h-full" hidden={activeStep != 2}>
                <FormSelectPlan />
              </div>

              <div className="h-full" hidden={activeStep != 3}>
                <FormPickAddOn
                  online={online}
                  storage={storage}
                  profile={profile}
                />
              </div>

              <div className="h-full" hidden={activeStep != 4}>
                <FormSummary />
              </div>
            </div>
          </div>
        </main>
      </FormDispatchContext.Provider>
    </FormContext.Provider>
  );
}
