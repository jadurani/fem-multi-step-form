import Button from "@components/Button/Button";
import { ADD_ON_PRICES, DURATION_ABBV, PLAN_PRICES } from "@lib/form.constant";
import { FormContext, FormDispatchContext } from "@lib/formContext";
import { useContext } from "react";

const FormSummary = () => {
  const { duration, selectedPlan, online, storage, profile } =
    useContext(FormContext);
  const dispatch = useContext(FormDispatchContext);

  const durationAbbv = DURATION_ABBV[duration];
  const selectedPlanPrice = PLAN_PRICES[duration][selectedPlan];
  const onlinePrice = online ? ADD_ON_PRICES[duration]["online"] : 0;
  const storagePrice = storage ? ADD_ON_PRICES[duration]["storage"] : 0;
  const profilePrice = profile ? ADD_ON_PRICES[duration]["profile"] : 0;

  const total = selectedPlanPrice + onlinePrice + storagePrice + profilePrice;
  return (
    <div>
      <div className="text-denim font-bold text-h4 md:text-h3">
        Finishing up
      </div>
      <div className="text-grey">
        Double-check everything looks OK before confirming.
      </div>

      <div className="rounded-md p-2 bg-grey-veryLight text-[14px] mt-4">
        <div className="flex justify-between items-center border-b border-grey/40 pb-2">
          <div>
            <span className="capitalize text-denim font-medium block my-1">
              <span>{selectedPlan}</span> <span>({duration})</span>
            </span>
            <a className="text-grey">Change</a>
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

      <div className="flex justify-between items-center px-2 py-4">
        <div className="text-grey text-[14px]">Total (per year)</div>
        <div className="text-purple font-bold">
          ${total}/{durationAbbv}
        </div>
      </div>

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
    </div>
  );
};

export default FormSummary;
