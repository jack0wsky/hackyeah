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
      <p className="text-dark-blue">Pick-up time</p>
      <div className="flex flex-col md:flex-row gap-x-8">
        <div className="flex gap-x-8 items-center">
          <DatePicker
            className="border-1 border-black px-16 py-8 rounded-4 z-[2]"
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

        <div className="flex gap-x-8 items-center">
          <p>to</p>
          <DatePicker
            showTimeInput
            className="border-1 border-black px-16 py-8 rounded-4"
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
