import { useStore } from "../../store";
import type { ItemType } from "../../types";
import classNames from "classnames";
import CitySelect from "./filters/city-select";
import DatetimePicker from "./filters/datetime-picker";
import Pill from "../shared/pill";

const types: ItemType[] = ["food", "gadgets", "other"];

const Filters = () => {
  const { filters, toggleTypes, updateSearch } = useStore();

  return (
    <section className="flex flex-col w-full mt-44">
      <div className="flex flex-col md:flex-row gap-x-16 w-full">
        <label>
          <input
            className="border-1 border-black px-16 py-8 rounded-4 mt-24"
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
            {types.map((type) => (
              <li key={type}>
                <Pill
                  active={filters.types.includes(type)}
                  onClick={() => {
                    toggleTypes(type);
                  }}
                >
                  {type}
                </Pill>
              </li>
            ))}
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

export default Filters;
