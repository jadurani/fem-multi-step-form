import InputField from "@components/InputField/InputField";
import { FormContext, FormDispatchContext } from "@lib/formContext";
import { PersonalInfo } from "@lib/types";
import { useContext } from "react";

const FormPersonalInfo = () => {
  // const [state, dispatch] = useReducer(multiStepFormReducer, initialState);
  // const [formData, setFormData] = useState<PersonalInfo>({
  //   name: "",
  //   email: "",
  //   phone: "",
  // });

  const formData = useContext(FormContext);
  const dispatch = useContext(FormDispatchContext);

  const handleBlur = (newInfo: Partial<PersonalInfo>) => {
    dispatch({
      type: "UPDATE_PERSONAL_INFO",
      ...formData,
      ...newInfo,
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
        onChange={(value) => handleBlur({ name: value })}
        onBlur={(value) => handleBlur({ name: value })}
      />

      <InputField
        type="email"
        value={formData.email}
        onChange={(value) => handleBlur({ email: value })}
        onBlur={(value) => handleBlur({ email: value })}
      />

      <InputField
        type="tel"
        value={formData.phone}
        onChange={(value) => handleBlur({ phone: value })}
        onBlur={(value) => handleBlur({ phone: value })}
      />
    </div>
  );
};

export default FormPersonalInfo;
