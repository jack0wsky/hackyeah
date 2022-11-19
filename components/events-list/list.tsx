import { useEffect } from "react";
import type { IEventItem } from "../../types";
import EventItem from "./event-item";
import { ApiClient } from "../../clients/api-client";

const DUMB_DATA: IEventItem[] = [
  {
    name: "test",
    ownerName: "CodeTwo",
    tags: ["food"],
    dateFrom: new Date().toString(),
    dateTo: new Date().toString(),
    address: "ul. Sezamkowa 20",
    city: "Kraków",
    eventBanner: "",
    ownerLogo: "",
  },
  {
    name: "test 2",
    ownerName: "CodeTwo",
    tags: ["gadgets"],
    dateFrom: new Date().toString(),
    dateTo: new Date().toString(),
    address: "ul. Sezamkowa 20",
    city: "Kraków",
    eventBanner: "",
    ownerLogo: "",
  },
];

const apiClient = new ApiClient();

const List = () => {
  const getEvents = async () => {
    const { data } = await apiClient.getEvents();
    console.log(data);
  };

  useEffect(() => {
    // getEvents();
  }, []);

  return (
    <section className="flex flex-col w-full">
      <ul className="grid grid-cols-2 gap-20">
        {DUMB_DATA.map((item) => (
          <EventItem key={item.name} {...item} />
        ))}
      </ul>
    </section>
  );
};

export default List;
