interface IEventAddress {
  city: string;
  houseNumber: string;
  postalCode: string;
  street: string;
}

export type ItemType = "food" | "gadgets" | "others" | "other";

export interface IEvent {
  id: number;
  name: string;
  banner: string;
  dateFrom: Date;
  dateTo: Date;
  ownerLogo: string;
  ownerName: string;
  tags: Capitalize<ItemType>[];
  address: IEventAddress;
}

export interface IEventReadModel extends IEvent {
  eventDuration: string;
  fullAddress: string;
}
