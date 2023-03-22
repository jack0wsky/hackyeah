import Link from "next/link";
import { IEvent, EventLeftoverTypes } from "@/modules/events-list/types/event";
import { EventMapper } from "@/modules/events-list/mapper";
import { Banner } from "@/modules/event/components/banner";
import { Details } from "@/modules/event/components/details";
import { Leftovers } from "@/modules/event/components/leftovers";
import { add } from "date-fns";
import { StaticMapGenerator } from "@/utils/static-map-generator";
import Image from "next/image";

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
      type: EventLeftoverTypes.Food,
      quantity: 10,
      unit: "slices",
      dateStart: JSON.parse(JSON.stringify(new Date("2023-03-20"))),
      timeStart: "10:00",
      dateEnd: JSON.parse(JSON.stringify(new Date("2023-03-21"))),
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
  const { address, detailsAddressLabel } = event;

  const mapGenerator = new StaticMapGenerator(
    detailsAddressLabel,
    address.postalCode,
    address.city,
    "PL"
  );

  const url = await mapGenerator.generate();

  return (
    <main className="screen-size">
      <Link href="/">Less waste events</Link>
      <div className="w-full flex flex-col-reverse sm:flex-row gap-x-16 justify-between mt-10 h-screen">
        <div className="w-full sm:w-7/12 flex flex-col">
          <Banner />

          <Details
            address={event.detailsAddressLabel}
            dateFrom={new Date(event.dateFrom)}
            dateTo={new Date(event.dateTo)}
          />

          <Leftovers items={event.leftovers} />
        </div>

        <div className="w-full sm:w-5/12 h-1/4 sm:h-3/4 rounded-16 bg-gray-100 relative overflow-hidden">
          <Image src={url} alt="" fill style={{ objectFit: "cover" }} />
        </div>
      </div>
    </main>
  );
};
