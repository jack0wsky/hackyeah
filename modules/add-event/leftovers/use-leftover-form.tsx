import { useFormik } from "formik";
import { v4 as uuid } from "uuid";
import { useStore } from "../../../store";

export const useLeftoverForm = () => {
  const { createLeftover, closeModal } = useStore();

  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      name: "",
      type: "",
      quantity: 1,
      unit: "",
      dateStart: "",
      timeStart: "",
      dateEnd: "",
      timeEnd: "",
    },
    onSubmit: (values, { resetForm }) => {
      createLeftover({ id: uuid(), ...values });
      closeModal();
      resetForm();
    },
  });

  const isFormValid = Object.values(values).every((value) => !!value);

  console.log(isFormValid, values);

  return {
    values,
    updateType: (selectedType: string) => setFieldValue("type", selectedType),
    toggleVisibility: (value: boolean) => setFieldValue("isVisible", value),
    updateValue: handleChange,
    addLeftover: handleSubmit,
    isFormValid,
  };
};
