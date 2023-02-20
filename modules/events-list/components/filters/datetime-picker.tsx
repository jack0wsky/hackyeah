import React from "react";
import Input from "../../../shared/input";
import { format } from "date-fns";
import { useStore } from "../../../../store";

const DatetimePicker = () => {
  const {
    filters,
    updateStartDate,
    updateEndDate,
    updateStartTime,
    updateEndTime,
  } = useStore();

  return (
    <div>
      <div className="flex flex-col items-center md:flex-row gap-x-8">
        <div className="flex flex-col gap-x-8">
          <label>Pick-up time</label>
          <fieldset className="relative gap-x-8 flex items-center">
            <Input
              value={filters.start.date || ""}
              onChange={({ target }) => {
                updateStartDate(target.value);
              }}
              type="date"
              min={format(new Date(), "yyyy-MM-dd")}
              placeholder=""
              name=""
              error=""
            />
            <Input
              type="time"
              value={filters.start.time}
              error={null}
              name="startTime"
              onChange={({ target }) => updateStartTime(target.value)}
            />
          </fieldset>
        </div>

        <p>to</p>

        <div className="flex gap-x-8 items-center">
          <fieldset className="relative flex gap-x-8 items-center mt-24">
            <Input
              value={filters.end.date || ""}
              onChange={({ target }) => updateEndDate(target.value)}
              type="date"
              min={format(new Date(filters.start.date || ""), "yyyy-MM-dd")}
              placeholder=""
              name=""
              error=""
            />
            <Input
              type="time"
              value={filters.end.time}
              error={null}
              name="startTime"
              onChange={({ target }) => updateEndTime(target.value)}
            />
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default DatetimePicker;
