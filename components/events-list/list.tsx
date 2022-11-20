import { useEffect, useState } from "react";
import type { IEventItem } from "../../types";
import EventItem from "./event-item";
import { ApiClient } from "../../clients/api-client";
import ReactPaginate from "react-paginate";
import { useStore } from "../../store";

const apiClient = new ApiClient();

let timer: any;

const List = () => {
  const [displayMode, setDisplayMode] = useState<"card" | "list-item">("card");
  const [page, setPage] = useState(0);
  const [pagination, setPagination] = useState({
    page: 0,
    totalAmount: 0,
  });
  const [events, setEvents] = useState<IEventItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { filters } = useStore();

  const getEvents = async () => {
    setLoading(true);

    const { items, totalAmount } = await apiClient.getEvents({ page });
    setPagination({ ...pagination, totalAmount });
    setEvents(items);

    setLoading(false);
  };

  const getFilteredEvents = async () => {
    setLoading(true);

    const { items, totalAmount } = await apiClient.getEvents({
      page,
      searchPhrase: filters.searchPhrase,
      city: filters.city,
    });

    setPagination({ ...pagination, totalAmount });
    setEvents(items);

    setLoading(false);
  };

  const debounce = (callback: () => void, timeout: number) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback();
    }, timeout);
  };

  useEffect(() => {
    getEvents();
  }, []);

  useEffect(() => {
    debounce(() => getFilteredEvents(), 700);
  }, [page, filters]);

  return (
    <section className="flex flex-col w-full">
      <div className="flex">
        <button onClick={() => setDisplayMode("card")}>Card</button>
        <button onClick={() => setDisplayMode("list-item")}>List</button>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {loading && <p>Loading...</p>}
        {!loading &&
          events.length > 0 &&
          events.map((item) => (
            <EventItem mode={displayMode} key={item.name} {...item} />
          ))}
      </ul>

      {pagination.totalAmount > 6 && (
        <ReactPaginate
          className="flex gap-x-8"
          activeLinkClassName="text-primary-blue"
          initialPage={page}
          onPageChange={({ selected }) =>
            setPagination({ ...pagination, page: selected })
          }
          pageCount={2}
        />
      )}
    </section>
  );
};

export default List;
