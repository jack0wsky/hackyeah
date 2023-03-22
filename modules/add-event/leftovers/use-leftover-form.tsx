import { useFormik } from "formik";
import { v4 as uuid } from "uuid";
import { useStore } from "@/store/index";
import { EventLeftoverTypes } from "@/modules/events-list/types/event";

const mapItemType = (type: string) => {
  if (type === "food") return EventLeftoverTypes.Food;
  if (type === "gadgets") return EventLeftoverTypes.Gadgets;
  return EventLeftoverTypes.Other;
};

export const useLeftoverForm = () => {
  const { createLeftover } = useStore();

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
      createLeftover({ id: uuid(), ...values, type: mapItemType(values.type) });
      resetForm();
    },
  });

  const isFormValid = Object.values(values).every((value) => !!value);

  return {
    values,
    updateType: (selectedType: string) => setFieldValue("type", selectedType),
    toggleVisibility: (value: boolean) => setFieldValue("isVisible", value),
    updateValue: handleChange,
    addLeftover: handleSubmit,
    isFormValid,
  };
};
