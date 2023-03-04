import { EventDetailsPage } from "../../../modules/event/view/event-details";
import { IEvent } from "../../../modules/events-list/types/event";
import { add } from "date-fns";
import { EventMapper } from "../../../modules/events-list/mapper";
import { ItemTypes } from "../../../modules/add-event/leftovers/types";

const eventMapper = new EventMapper();

export default EventDetailsPage;
