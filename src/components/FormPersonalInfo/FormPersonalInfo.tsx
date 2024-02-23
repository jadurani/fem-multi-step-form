import InputField from "@components/InputField/InputField";
import { FormContext, FormDispatchContext } from "@lib/formContext";
import { PersonalInfo } from "@lib/types";
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

  return (
    <div>
      <div className="text-denim font-bold text-h4 md:text-h3">
        Personal Info
      </div>
      <div className="text-grey">
        Please provide your name, email address, and phone number.
      </div>

      <InputField
        type="text"
        value={formData.name}
        error={formData.errors?.get("name")}
        onChange={(value) => handleChange({ name: value })}
        onBlur={(value) => handleBlur("name", value)}
      />

      <InputField
        type="email"
        value={formData.email}
        error={formData.errors?.get("email")}
        onChange={(value) => handleChange({ email: value })}
        onBlur={(value) => handleBlur("email", value)}
      />

      <InputField
        type="tel"
        value={formData.phone}
        error={formData.errors?.get("phone")}
        onChange={(value) => handleChange({ phone: value })}
        onBlur={(value) => handleBlur("phone", value)}
      />
    </div>
  );
};

export default FormPersonalInfo;
