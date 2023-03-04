import Link from "next/link";
import { Banner } from "../components/banner";
import { Details } from "../components/details";
import { IEvent, IEventReadModel } from "../../events-list/types/event";
import { Leftovers } from "../components/leftovers";
import { add } from "date-fns";
import { ItemTypes } from "../../add-event/leftovers/types";
import { EventMapper } from "../../events-list/mapper";

const DUMP: IEvent = {
  id: 1,
  name: "Some event",
  banner: "",
  tags: [],
  ownerLogo: "",
  ownerName: "EL Passion",
  dateFrom: JSON.parse(JSON.stringify(new Date())),
  dateTo: JSON.parse(JSON.stringify(add(new Date(), { days: 3 }))),
  address: {
    postalCode: "00-300",
    city: "Warsaw",
    houseNumber: "60",
    street: "Grzybowska",
  },
  leftovers: [
    {
      id: "1",
      name: "Pizza",
      type: ItemTypes.Food,
      quantity: 10,
      unit: "slices",
      dateStart: JSON.parse(JSON.stringify(new Date("2023-03-20"))),
      timeStart: "10:00",
      dateEnd: JSON.parse(JSON.stringify(new Date("2023-03-20"))),
      timeEnd: "12:00",
    },
  ],
};

async function getEvent() {
  const eventMapper = new EventMapper();

  return eventMapper.mapDtoToReadModel(DUMP);
}

export const EventDetailsPage = async () => {
  const event = await getEvent();

  return (
    <main className="screen-size">
      <Link href="/">Less waste events</Link>
      <div className="w-full flex gap-x-16 justify-between mt-10 h-screen">
        <div className="w-7/12 flex flex-col">
          <Banner />

          <Details address={event.detailsAddressLabel} />

          <Leftovers items={event.leftovers} />
        </div>
        <div className="w-5/12 h-3/4 rounded-16 bg-gray-100"></div>
      </div>
    </main>
  );
};
