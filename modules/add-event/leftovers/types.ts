export enum ItemTypes {
  Food = "food",
  Gadgets = "gadgets",
  Other = "other",
}

export interface ILeftover {
  id: string;
  name: string;
  type: ItemTypes;
  dateStart: string;
  timeStart: string;
  dateEnd: string;
  timeEnd: string;
  quantity: number;
  unit: string;
}

export interface ILeftoverFormValues extends ILeftover {
  isVisible: boolean;
}
