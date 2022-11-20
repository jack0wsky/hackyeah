import { useEffect, useState } from "react";
import type { IEventItem } from "../../types";
import EventItem from "./event-item";
import { ApiClient } from "../../clients/api-client";
import ReactPaginate from "react-paginate";
import { useStore } from "../../store";

const apiClient = new ApiClient();

let timer: any;

const List = () => {
  const [pagination, setPagination] = useState({
    page: 0,
    totalAmount: 0,
  });
  const [events, setEvents] = useState<IEventItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { filters } = useStore();

  const getEvents = async () => {
    setLoading(true);

    const { items, totalAmount } = await apiClient.getEvents({
      page: pagination.page,
    });
    setPagination({ ...pagination, totalAmount });
    setEvents(items);

    setLoading(false);
  };

  const getFilteredEvents = async () => {
    setLoading(true);

    const { items, totalAmount } = await apiClient.getEvents({
      page: pagination.page,
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
  }, [pagination.page, filters]);

  return (
    <section className="flex flex-col w-full mt-[77px]">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {loading && <p>Loading...</p>}
        {!loading &&
          events.length > 0 &&
          events.map((item) => (
            <EventItem mode="card" key={item.name} {...item} />
          ))}
      </ul>

      {pagination.totalAmount > 6 && (
        <ReactPaginate
          className="flex gap-x-8"
          activeLinkClassName="text-primary-blue"
          initialPage={pagination.page}
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
