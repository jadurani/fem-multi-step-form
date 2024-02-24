import Button from "@components/Button/Button";
import InputField from "@components/InputField/InputField";
import { FormContext, FormDispatchContext } from "@lib/formContext";
import { PersonalInfo } from "@lib/types";
import { validateForm } from "@lib/validate";
import { useContext } from "react";

const FormPersonalInfo = () => {
  const formData = useContext(FormContext);
  const dispatch = useContext(FormDispatchContext);

  const handleChange = (newInfo: Partial<PersonalInfo>) => {
    dispatch({
      type: "UPDATE_PERSONAL_INFO",
      ...formData,
      ...newInfo,
    });
  };

  const handleBlur = (fieldName: string, error: string | null) => {
    dispatch({
      type: "SET_ERRORS",
      fieldName,
      error,
    });
  };

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const formErrors = validateForm(ev);
    dispatch({
      type: "SET_FORM_ERRORS",
      formErrors,
    });
    dispatch({ type: "UPDATE_FORM_STEP", activeStep: 2 });
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="text-denim font-bold text-h4 md:text-h3">
        Personal Info
      </div>
      <div className="text-grey">
        Please provide your name, email address, and phone number.
      </div>

      <InputField
        required={true}
        name="name"
        type="text"
        value={formData.name}
        error={formData.errors?.get("name")}
        onChange={(value) => handleChange({ name: value })}
        onBlur={(value) => handleBlur("name", value)}
      />

      <InputField
        required={true}
        name="email"
        type="email"
        value={formData.email}
        error={formData.errors?.get("email")}
        onChange={(value) => handleChange({ email: value })}
        onBlur={(value) => handleBlur("email", value)}
      />

      <InputField
        required={true}
        name="phone"
        type="tel"
        value={formData.phone}
        error={formData.errors?.get("phone")}
        onChange={(value) => handleChange({ phone: value })}
        onBlur={(value) => handleBlur("phone", value)}
      />

      <div className="flex justify-end">
        <Button type="submit" color="denim">
          Next
        </Button>
      </div>
    </form>
  );
};

export default FormPersonalInfo;
