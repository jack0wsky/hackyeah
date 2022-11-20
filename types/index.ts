export type ItemType = "food" | "gadgets" | "others" | 'other';

export interface IApiEventItem {
  id: number;
  name: string;
  city: string;
  address: string;
  date_from: string;
  date_to: string;
  owner_name: string;
  owner_logo: string;
  banner: string;
  tags: Capitalize<ItemType>[];
}

export interface IEventItem
  extends Pick<
    IApiEventItem,
    "name" | "city" | "id" | "address" | "banner" | "tags"
  > {
  dateFrom: string;
  dateTo: string;
  ownerName: string;
  ownerLogo: string;
}
