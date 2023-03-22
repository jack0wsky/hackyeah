import type { ILeftover } from "@/modules/add-event";

export enum EventLeftoverTypes {
  Food = "food",
  Gadgets = "gadgets",
  Other = "other",
}

interface IEventAddress {
  city: string;
  houseNumber: string;
  postalCode: string;
  street: string;
}

export interface IEvent {
  id: number;
  name: string;
  banner: string;
  dateFrom: Date;
  dateTo: Date;
  ownerLogo: string;
  ownerName: string;
  tags: Capitalize<EventLeftoverTypes>[];
  address: IEventAddress;
  leftovers: ILeftover[];
}

export interface IEventReadModel extends IEvent {
  eventDuration: string;
  fullAddress: string;
  detailsAddressLabel: string;
}
