import InputField from "@components/InputField/InputField";
import { useState } from "react";

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}

const FormPersonalInfo = () => {
  const [formData, setFormData] = useState<PersonalInfo>({
    name: "",
    email: "",
    phone: "",
  });

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
        value={formData.phone}
        onChange={(value) => setFormData({ ...formData, phone: value })}
      />

      <InputField
        type="email"
        value={formData.email}
        onChange={(value) => setFormData({ ...formData, email: value })}
      />

      <InputField
        type="tel"
        value={formData.phone}
        onChange={(value) => setFormData({ ...formData, phone: value })}
      />
    </div>
  );
};

export default FormPersonalInfo;
