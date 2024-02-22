import InputField from "@components/InputField/InputField";
import { initialState, multiStepFormReducer } from "@lib/formReducer";
import { PersonalInfo } from "@lib/types";
import { useReducer, useState } from "react";

const FormPersonalInfo = () => {
  const [state, dispatch] = useReducer(multiStepFormReducer, initialState);
  const [formData, setFormData] = useState<PersonalInfo>({
    name: "",
    email: "",
    phone: "",
  });

  const handleBlur = (value: string) => {
    dispatch({
      type: "UPDATE_PERSONAL_INFO",
      ...formData,
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
        onChange={(value) => setFormData({ ...formData, name: value })}
        onBlur={handleBlur}
      />

      <InputField
        type="email"
        value={formData.email}
        onChange={(value) => setFormData({ ...formData, email: value })}
        onBlur={handleBlur}
      />

      <InputField
        type="tel"
        value={formData.phone}
        onChange={(value) => setFormData({ ...formData, phone: value })}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default FormPersonalInfo;
