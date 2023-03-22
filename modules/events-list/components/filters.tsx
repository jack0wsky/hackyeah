import React from "react";
import classNames from "classnames";

import { useStore } from "@/store/index";
import CitySelect from "@/modules/events-list/components/filters/city-select";
import DatetimePicker from "@/modules/events-list/components/filters/datetime-picker";
import { EventLeftoverTypes } from "@/modules/events-list/types/event";
import { Pill } from "@/modules/shared";
import { FoodIcon, GadgetsIcon, OthersIcon } from "@/modules/shared/icons";

export const Filters = () => {
  const { filters, toggleTypes, updateSearch, updateStartDate } = useStore();

  return (
    <section className="flex flex-col w-full mt-44">
      <div className="flex flex-col md:flex-row gap-x-16 w-full">
        <label>
          <input
            className="bg-gray-100 px-16 py-8 rounded-4 mt-24"
            value={filters.searchPhrase}
            placeholder="Search..."
            onChange={({ target }) => updateSearch(target.value)}
          />
        </label>

        <CitySelect />

        <DatetimePicker />

        <div>
          <p>Type</p>
          <ul className="flex gap-x-8">
            <li>
              <Pill
                active={filters.types.includes(EventLeftoverTypes.Food)}
                icon={
                  <FoodIcon
                    className={classNames({
                      "fill-white": filters.types.includes(
                        EventLeftoverTypes.Food
                      ),
                    })}
                  />
                }
                onClick={() => {
                  toggleTypes(EventLeftoverTypes.Food);
                }}
              >
                {EventLeftoverTypes.Food}
              </Pill>
            </li>

            <li>
              <Pill
                active={filters.types.includes(EventLeftoverTypes.Gadgets)}
                icon={<GadgetsIcon />}
                onClick={() => {
                  toggleTypes(EventLeftoverTypes.Gadgets);
                }}
              >
                {EventLeftoverTypes.Gadgets}
              </Pill>
            </li>

            <li>
              <Pill
                active={filters.types.includes(EventLeftoverTypes.Other)}
                icon={<OthersIcon />}
                onClick={() => {
                  toggleTypes(EventLeftoverTypes.Other);
                }}
              >
                {EventLeftoverTypes.Other}
              </Pill>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="flex">
          <p>Sort by</p>
          <select>
            {["Amount of items ASC", "Amount of items DESC"].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};
