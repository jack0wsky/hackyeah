export type ItemType = "food" | "gadgets" | "others";

export interface IEventItem {
  name: string;
  city: string;
  address: string;
  dateFrom: string;
  dateTo: string;
  ownerName: string;
  ownerLogo: string;
  eventBanner: string;
  tags: ItemType[];
}
