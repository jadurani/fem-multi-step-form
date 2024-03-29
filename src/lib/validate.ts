export const validateField = (el: HTMLInputElement) => {
  const value = el.value.trim();

  if (el.required && value === "") {
    return "This field is required"
  }

  if (el.type === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
    return "Invalid format"
  }

  if (el.type === "tel" && !/^\+?\d{10,12}$/.test(value)) {
    return "Invalid format"
  }

  return null;
}


export const validateForm = (ev: React.FormEvent<HTMLFormElement>) => {
  const form = ev.currentTarget;
  // const errors = new Map<string, string | null>();
  const errors: Array<{ fieldName: string; error: string | null }> = [];

  // Iterate over form's child elements
  Array.from(form.elements)
    .filter((el, idx, arr) => el.nodeName === "INPUT")
    .forEach((el, idx, arr) => {
      const inputEl = el as HTMLInputElement;
      const error = validateField(inputEl)
      const fieldName = inputEl.name;
      errors.push({ fieldName, error })
    });

  return errors
};
