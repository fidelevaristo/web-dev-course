import { ChangeEvent, useState } from "react";

type LoginFormState = {
  username: string;
  password: string;
};

export function useLoginForm() {
  const [form, setForm] = useState<LoginFormState>({
    username: "",
    password: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  function resetForm() {
    setForm({
      username: "",
      password: "",
    });
  }

  return {
    form,
    handleChange,
    resetForm,
  };
}