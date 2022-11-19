import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { useStore } from "../../../store";

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
      <p>Pick-up time</p>
      <div className="flex gap-x-8">
        <div className="flex items-center">
          <p>from</p>
          <DatePicker
            customInput={<input className="bg-black/10 p-4" readOnly />}
            value={format(new Date(filters.start.date), "dd/MM/yyyy")}
            startDate={new Date(filters.start.date)}
            selectsStart
            onChange={(date) => updateStartDate(date?.toString() as string)}
          />
          <input
            type="time"
            value={filters.start.time}
            onChange={({ target }) => updateStartTime(target.value)}
          />
        </div>

        <div className="flex items-center">
          <p>to</p>
          <DatePicker
            showTimeInput
            customInput={<input className="bg-black/10 p-4" readOnly />}
            selectsEnd
            value={format(new Date(filters.end.date), "dd/MM/yyyy")}
            onChange={(date) => updateEndDate(date?.toString() as string)}
          />
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
