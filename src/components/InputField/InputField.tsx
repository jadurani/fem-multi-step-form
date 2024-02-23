export type InputFieldType = "email" | "text" | "tel";

interface Props {
  type: InputFieldType;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  onBlur: (error: string | null) => void;
}

const isInvalid = (type: InputFieldType, value: string): boolean => {
  return (
    (type === "email" && !/^\S+@\S+\.\S+$/.test(value)) ||
    (type === "tel" && !/^\+?\d{10,12}$/.test(value))
  );
};

const INPUT_LABEL: Record<InputFieldType, string> = {
  email: "Email Address",
  text: "Name",
  tel: "Phone Number",
};

const PLACEHOLDER = {
  email: "e.g. stephenking@lorem.com",
  text: "e.g. Stephen King",
  tel: "e.g. +1 234 567 890",
};

const InputField = ({ type, value, error = "", onChange, onBlur }: Props) => {
  const handleBlur = (value: string) => {
    if (value.trim() === "") {
      onBlur("This field is required");
    } else if (isInvalid(type, value)) {
      onBlur("Invalid format");
    } else {
      onBlur(null);
    }
  };

  return (
    <div className="py-1 relative">
      <label className="text-denim text-[14px] my-4">{INPUT_LABEL[type]}</label>
      <p className="absolute text-[14px] top-0 right-1 pl-4 text-error font-bold">
        {error}
      </p>
      <input
        className={`block w-full text-denim outline-none font-medium p-2 border rounded-md ${error ? "text-error border-error" : "border-grey-light hover:border-purple"}`}
        type={type}
        value={value}
        placeholder={PLACEHOLDER[type]}
        onBlur={(e) => handleBlur(e.target.value)}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputField;
