import React from "react";
import { format } from "date-fns";
import { Input } from "@/modules/shared";
import { useStore } from "@/store/index";

export const Details = () => {
  const {
    updateName,
    updateDescription,
    setEventStartDate,
    setEventEndDate,
    setEventStartTime,
    setEventEndTime,
    addEvent,
  } = useStore();

  return (
    <section className="mt-44 w-[740px]">
      <h2 className="text-3xl font-bold text-dark-blue">Details</h2>

      <div className="flex flex-col justify-between w-full mt-12">
        <div className="flex gap-x-10">
          <fieldset className="w-full">
            <Input
              label="Event name"
              onChange={({ target }) => updateName(target.value)}
              value={addEvent.name}
              type="text"
              placeholder=""
              name="eventName"
              error=""
            />

            <Input
              label="Location"
              onChange={() => {}}
              value={""}
              type="text"
              placeholder=""
              name="location"
              error={""}
            />
          </fieldset>

          <div className="w-full">
            <fieldset className="flex justify-between gap-x-12">
              <Input
                label="Start date"
                onChange={({ target }) => {
                  setEventStartDate(target.value);
                }}
                value={addEvent.start.date || ""}
                type="date"
                name="startDate"
                error={""}
                min={format(new Date(), "yyyy-MM-dd")}
              />
              <Input
                label="Start time"
                onChange={({ target }) => setEventStartTime(target.value)}
                value={addEvent.start.time || ""}
                type="time"
                name="startTime"
                error={""}
              />
            </fieldset>

            <fieldset className="flex justify-between gap-x-12">
              <Input
                label="End date"
                onChange={({ target }) => setEventEndDate(target.value)}
                value={addEvent.end.date || ""}
                type="date"
                min={addEvent.start.date || ""}
                name="endDate"
                error={""}
              />
              <Input
                label="End time"
                onChange={({ target }) => setEventEndTime(target.value)}
                value={addEvent.end.time || ""}
                type="time"
                name="endTime"
                error={""}
              />
            </fieldset>
          </div>
        </div>

        <label>
          <p className="text-dark-blue/60">Description</p>
          <textarea
            value={addEvent.description}
            onChange={({ target }) => updateDescription(target.value)}
            name="description"
            className="base-input px-20 w-full resize-none h-[147px]"
          />
        </label>
      </div>
    </section>
  );
};
