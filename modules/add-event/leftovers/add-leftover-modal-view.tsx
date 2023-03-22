import React from "react";
import { Input, Button, Pill } from "@/modules/shared";
import { useLeftoverForm } from "./use-leftover-form";
import { useStore } from "@/store/index";
import { FoodIcon, GadgetsIcon, OthersIcon } from "@/modules/shared/icons";
import NiceModal, { useModal } from "@ebay/nice-modal-react";

export const AddLeftoverModalView = NiceModal.create(() => {
  const { values, isFormValid, updateValue, addLeftover, updateType } =
    useLeftoverForm();

  const modal = useModal();

  const { addEvent } = useStore();

  return (
    <div className="fixed left-0 top-0 w-full h-screen flex justify-center items-end sm:items-center bg-black/40">
      <div className="w-full sm:max-w-[400px] min-h-[500px] rounded-12 bg-white">
        <div className="w-full h-50 flex items-center justify-between p-20">
          <h3>Add leftover</h3>

          <button onClick={modal.remove}>close</button>
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            addLeftover();
            modal.remove();
          }}
          className="px-20 pb-20 overflow-y-auto flex flex-col"
        >
          <Input
            type="text"
            label="Name"
            value={values.name}
            placeholder="Name"
            error={null}
            name="name"
            onChange={updateValue}
          />

          <div className="flex">
            <Pill
              active={values.type === "Food"}
              onClick={() => updateType("Food")}
              icon={<FoodIcon />}
            >
              Food
            </Pill>

            <Pill
              active={values.type === "Gadgets"}
              onClick={() => updateType("Gadgets")}
              icon={<GadgetsIcon />}
            >
              Gadgets
            </Pill>

            <Pill
              active={values.type === "Other"}
              onClick={() => updateType("Other")}
              icon={<OthersIcon />}
            >
              Other
            </Pill>
          </div>

          <div className="mt-20">
            <label>Quantity</label>
            <fieldset className="flex gap-x-8 items-center justify-between w-full">
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
                className="w-full"
                placeholder="Unit"
                error={null}
                name="unit"
                onChange={updateValue}
              />
            </fieldset>
          </div>

          <div className="mt-20">
            <label className="mt-20">Available from</label>
            <fieldset className="flex items-center justify-between gap-x-2 w-full">
              <Input
                type="date"
                value={values.dateStart}
                error={""}
                className="w-full"
                min={addEvent.start.date || ""}
                name="dateStart"
                onChange={updateValue}
              />
              <Input
                type="time"
                value={values.timeStart}
                error={""}
                name="timeStart"
                onChange={updateValue}
              />
            </fieldset>
          </div>

          <div className="my-20">
            <label>Available to</label>
            <fieldset className="flex items-center justify-between gap-x-2 w-full">
              <Input
                type="date"
                value={values.dateEnd}
                error={""}
                name="dateEnd"
                className="w-full"
                min={addEvent.start.date || ""}
                onChange={updateValue}
              />
              <Input
                type="time"
                value={values.timeEnd}
                error={""}
                name="timeEnd"
                onChange={updateValue}
              />
            </fieldset>
          </div>

          <Button
            variant="primary"
            disabled={!isFormValid}
            type="submit"
            fullWidth
          >
            Add item
          </Button>
        </form>
      </div>
    </div>
  );
});
