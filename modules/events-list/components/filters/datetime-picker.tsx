import React, { useState } from "react";
import Input from "../../../shared/input";
import { format } from "date-fns";
import { useStore } from "../../../../store";
import { DayContent, DayContentProps, DayPicker } from "react-day-picker";
import classNames from "classnames";

const Day = (props: DayContentProps) => (
  <button
    className={classNames("p-2 rounded-full", {
      "bg-primary-blue text-white": props.activeModifiers.selected,
      "text-gray-200": props.activeModifiers.disabled,
    })}
  >
    <DayContent {...props} />
  </button>
);

const DatetimePicker = () => {
  const [openedPicker, setOpenedPicker] = useState<"start" | "end" | "none">(
    "none"
  );

  const {
    filters,
    updateStartDate,
    updateEndDate,
    updateStartTime,
    updateEndTime,
  } = useStore();

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-x-8">
        <div className="flex gap-x-8 items-center">
          <div className="relative">
            <Input
              label="Pick-up time"
              value={format(filters.start.date || new Date(), "dd MM yyyy")}
              onChange={() => {}}
              type="text"
              placeholder=""
              name=""
              error=""
            />
            {openedPicker === "start" && (
              <div className="absolute">
                <DayPicker
                  mode="single"
                  components={{ DayContent: Day }}
                  selected={new Date()}
                  onSelect={(date) => {
                    // updateStartDate(date);
                  }}
                  footer={
                    <button onClick={() => setOpenedPicker("none")}>
                      Save
                    </button>
                  }
                />
              </div>
            )}
          </div>

          <input
            type="time"
            value={filters.start.time}
            onChange={({ target }) => updateStartTime(target.value)}
          />
        </div>

        <div className="flex gap-x-8 items-center">
          <label className="relative" onFocus={() => setOpenedPicker("end")}>
            <Input
              label="Pick-up time"
              value={format(filters.start.date || new Date(), "dd MM yyyy")}
              onChange={() => {}}
              type="text"
              placeholder=""
              name=""
              error=""
            />
            {openedPicker === "end" && (
              <div className="absolute">
                <DayPicker
                  mode="single"
                  components={{ DayContent: Day }}
                  selected={new Date()}
                  onSelect={(date) => {
                    // updateEndDate(date);
                  }}
                  footer={
                    <button onClick={() => setOpenedPicker("none")}>
                      Save
                    </button>
                  }
                />
              </div>
            )}
          </label>
          <input
            type="time"
            value={filters.end.time}
            onChange={({ target }) => updateEndTime(target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default DatetimePicker;
