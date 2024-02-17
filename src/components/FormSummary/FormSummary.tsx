const FormSummary = () => {
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
            <span className="text-denim font-medium block my-1">
              Arcade (Yearly)
            </span>
            <a className="text-grey">Change</a>
          </div>
          <div className="font-bold text-denim">$90/yr</div>
        </div>
        <div className="flex justify-between items-center my-2">
          <div className="text-grey">Online service</div>
          <div className="text-denim">+$10/yr</div>
        </div>
        <div className="flex justify-between items-center my-2">
          <div className="text-grey">Larger storage</div>
          <div className="text-denim">+$20/yr</div>
        </div>
      </div>

      <div className="flex justify-between items-center px-2 py-4">
        <div className="text-grey text-[14px]">Total (per year)</div>
        <div className="text-purple font-bold">$120/yr</div>
      </div>
    </div>
  );
};

export default FormSummary;
