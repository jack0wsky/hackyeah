import { EventDetailsPage } from "../../modules/event/view/event-details";
import { IEvent } from "../../modules/events-list/types/event";
import { add } from "date-fns";
import { EventMapper } from "../../modules/events-list/mapper";
import { ItemTypes } from "../../modules/add-event/leftovers/types";

const eventMapper = new EventMapper();

export default EventDetailsPage;

export async function getServerSideProps() {
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

  return {
    props: {
      event: eventMapper.mapDtoToReadModel(DUMP),
    },
  };
}
