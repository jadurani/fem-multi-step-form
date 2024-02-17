import iconThankYou from "@assets/icons/icon-thank-you.svg";
import Image from "next/image";

const FormFinished = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-center gap-2">
      <Image src={iconThankYou} alt="" />
      <div className="mt-2 text-denim font-bold text-h4 md:text-h3">
        Thank you!
      </div>
      <div className="text-grey">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </div>
    </div>
  );
};

export default FormFinished;
