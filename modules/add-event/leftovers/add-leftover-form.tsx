import React from "react";
import Input from "../../shared/input";
import { SelectInput } from "../../shared/select";
import { Toggle } from "../../shared/toggle";
import { ILeftoverFormValues } from "./types";
import { useLeftoverForm } from "./use-leftover-form";
import Button from "../../shared/button";

interface IAddLeftoverFormProps {
  onFormSubmit: (values: ILeftoverFormValues) => void;
}

export const AddLeftoverForm = ({ onFormSubmit }: IAddLeftoverFormProps) => {
  const { values, updateValue, addLeftover, updateType, toggleVisibility } =
    useLeftoverForm();

  return (
    <form
      onSubmit={addLeftover}
      className="flex items-center gap-x-5 w-full h-[80px]"
    >
      <Input
        type="text"
        label=""
        value={values.name}
        placeholder="Name"
        error={null}
        name="name"
        onChange={updateValue}
      />
      <SelectInput
        items={[{ label: "Food" }, { label: "Gadgets" }]}
        placeholder="Select type"
        onChange={updateType}
      />
      <Input
        type="number"
        className="w-[80px]"
        min="1"
        value={values.quantity}
        error={null}
        name="quantity"
        onChange={updateValue}
      />
      <Input
        type="text"
        value={values.unit}
        className="w-[140px]"
        placeholder="Unit"
        error={null}
        name="unit"
        onChange={updateValue}
      />

      <fieldset className="flex items-center gap-x-2">
        <Input
          type="date"
          value=""
          error={""}
          name="date"
          onChange={() => {}}
        />
        <p>to</p>
        <Input
          type="time"
          value=""
          error={""}
          name="date"
          onChange={() => {}}
        />
      </fieldset>
      <div className="flex items-center gap-x-2">
        <Toggle checked={false} onToggle={toggleVisibility} />
        Hidden
      </div>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </form>
  );
};
