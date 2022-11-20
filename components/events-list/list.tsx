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
  const [events, setEvents] = useState<IEventItem[]>([]);
  const { filters } = useStore();

  const getEvents = async () => {
    const data = await apiClient.getEvents({ page });
    setEvents(data);
  };

  const getFilteredEvents = async () => {
    const data = await apiClient.getEvents({
      page,
      searchPhrase: filters.searchPhrase,
      city: filters.city,
      tags: filters.types,
    });

    setEvents(data);
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
        {events.map((item) => (
          <EventItem mode={displayMode} key={item.name} {...item} />
        ))}
      </ul>

      <ReactPaginate
        className="flex gap-x-8"
        activeLinkClassName="text-primary-blue"
        initialPage={page}
        onPageChange={({ selected }) => setPage(selected)}
        pageCount={2}
      />
    </section>
  );
};

export default List;
