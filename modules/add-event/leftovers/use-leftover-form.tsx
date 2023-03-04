import { useFormik } from "formik";
import { v4 as uuid } from "uuid";
import { useStore } from "@/store/index";
import { ItemTypes } from "@/modules/add-event/leftovers/types";

const mapItemType = (type: string) => {
  if (type === "food") return ItemTypes.Food;
  if (type === "gadgets") return ItemTypes.Gadgets;
  return ItemTypes.Other;
};

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
      createLeftover({ id: uuid(), ...values, type: mapItemType(values.type) });
      closeModal();
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
