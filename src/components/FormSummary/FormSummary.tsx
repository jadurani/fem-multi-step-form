import Button from "@components/Button/Button";
import FormFinished from "@components/FormFinished/FormFinished";
import { ADD_ON_PRICES, DURATION_ABBV, PLAN_PRICES } from "@lib/form.constant";
import { FormContext, FormDispatchContext } from "@lib/formContext";
import { useContext, useState } from "react";

const FormSummary = () => {
  const [submitted, setSubmitted] = useState(false);
  const { duration, selectedPlan, online, storage, profile } =
    useContext(FormContext);
  const dispatch = useContext(FormDispatchContext);

  const durationAbbv = DURATION_ABBV[duration];
  const selectedPlanPrice = PLAN_PRICES[duration][selectedPlan];
  const onlinePrice = online ? ADD_ON_PRICES[duration]["online"] : 0;
  const storagePrice = storage ? ADD_ON_PRICES[duration]["storage"] : 0;
  const profilePrice = profile ? ADD_ON_PRICES[duration]["profile"] : 0;

  const total = selectedPlanPrice + onlinePrice + storagePrice + profilePrice;

  if (submitted) {
    return (
      <div className="h-[400px] px-4 lg:px-8 lg:h-full">
        <FormFinished />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="text-denim font-bold text-h4 md:text-h3">
        Finishing up
      </div>
      <div className="text-grey mb-6">
        Double-check everything looks OK before confirming.
      </div>

      <div className="rounded-md px-4 py-2 lg:py-4 lg:px-8 bg-grey-veryLight text-[14px] mt-4">
        <div className="flex justify-between items-center border-b border-grey/40 pb-4">
          <div>
            <span className="capitalize text-denim font-medium block my-2">
              <span>{selectedPlan}</span> <span>({duration})</span>
            </span>
            <button
              className="text-grey hover:text-purple underline cursor"
              onClick={() =>
                dispatch({ type: "UPDATE_FORM_STEP", activeStep: 2 })
              }>
              Change
            </button>
          </div>
          <div className="font-bold text-denim">
            ${selectedPlanPrice}/{durationAbbv}
          </div>
        </div>

        {online && (
          <div className="flex justify-between items-center my-2">
            <div className="text-grey">Online service</div>
            <div className="text-denim">
              +${onlinePrice}/{durationAbbv}
            </div>
          </div>
        )}

        {storage && (
          <div className="flex justify-between items-center my-2">
            <div className="text-grey">Larger storage</div>
            <div className="text-denim">
              +${storagePrice}/{durationAbbv}
            </div>
          </div>
        )}
        {profile && (
          <div className="flex justify-between items-center my-2">
            <div className="text-grey">Customizable Profile</div>
            <div className="text-denim">
              +${profilePrice}/{durationAbbv}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center px-4 lg:px-8 my-4">
        <div className="text-grey text-[14px]">Total (per year)</div>
        <div className="text-purple font-bold text-body lg:text-h5">
          ${total}/{durationAbbv}
        </div>
      </div>

      <div className="fixed py-4 px-6 bottom-0 left-0 lg:static w-full flex justify-between mt-auto bg-white z-20">
        <Button
          style="clear"
          handleClick={() =>
            dispatch({ type: "UPDATE_FORM_STEP", activeStep: 3 })
          }>
          Go Back
        </Button>

        <Button color="purple" handleClick={() => setSubmitted(true)}>
          Confirm
        </Button>
      </div>
    </div>
  );
};

export default FormSummary;
