import { EventLeftoverTypes } from "@/modules/events-list/types/event";

export interface ILeftover {
  id: string;
  name: string;
  type: EventLeftoverTypes;
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
