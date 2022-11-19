import { useStore } from "../../store";
import type { ItemType } from "../../types";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

const types: ItemType[] = ["food", "gadgets", "others"];

const TimeInput = ({ value }: { value: string }) => (
  <input
    className="bg-black/10"
    value={value}
    onChange={(event) => console.log(event.target.value)}
  />
);

const Filters = () => {
  const { filters, updateStartDate } = useStore();

  return (
    <div className="flex justify-between w-full">
      <label>
        <input value={filters.searchPhrase} placeholder="Search..." />
      </label>
      <label>
        <p>City</p>
      </label>
      <div>
        <p>Pick-up time</p>
        <div className="flex">
          <div className="flex items-center">
            <p>from</p>
            <DatePicker
              showTimeInput
              customInput={<input className="bg-black/10 p-4" readOnly />}
              value={format(new Date(filters.time.start), "dd/MM/yyyy hh:mm")}
              startDate={new Date(filters.time.start)}
              selectsStart
              onChange={(date) => updateStartDate(date as Date)}
              onSelect={(date) => console.log(date)}
            />
          </div>

          <div className="flex items-center">
            <p>to</p>
            <DatePicker
              showTimeInput
              customInput={<input className="bg-black/10 p-4" />}
              selectsEnd
              value={format(new Date(filters.time.end), "dd/MM/yyyy hh:mm")}
              onChange={(date) => console.log(date)}
            />
          </div>
        </div>
      </div>

      <div>
        <p>Type</p>
        <ul className="flex gap-x-8">
          {types.map((type) => (
            <li>
              <button className="capitalize">{type}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filters;
