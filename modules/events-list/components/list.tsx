import EventItem from "./event-item";
import ReactPaginate from "react-paginate";
import { useEventsList } from "../hooks";

let timer: any;

const List = () => {
  const { events, pagination, updatePagination } = useEventsList();

  const debounce = (callback: () => void, timeout: number) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback();
    }, timeout);
  };

  return (
    <section className="flex flex-col w-full mt-[77px]">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {events.length > 0 ? (
          events.map((item) => (
            <EventItem mode="card" key={item.name} {...item} />
          ))
        ) : (
          <p>Brak wydarzeń</p>
        )}
      </ul>

      {pagination.totalAmount > 6 && (
        <ReactPaginate
          className="flex gap-x-8"
          activeLinkClassName="text-primary-blue"
          initialPage={pagination.page}
          onPageChange={({ selected }) =>
            updatePagination({ ...pagination, page: selected })
          }
          pageCount={2}
        />
      )}
    </section>
  );
};

export default List;
