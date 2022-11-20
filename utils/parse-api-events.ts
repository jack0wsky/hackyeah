import { IApiEventItem, IEventItem } from "../types";

export const parseApiEvents = (event: IApiEventItem): IEventItem => ({
  ...event,
  ownerName: event.owner_name,
  dateFrom: event.date_from,
  dateTo: event.date_to,
  ownerLogo: event.owner_logo,
});
