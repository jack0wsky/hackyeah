import { IEvent, IEventReadModel } from "./types/event";
import { format } from "date-fns";

export class EventMapper {
  private getEventDuration({ dateFrom, dateTo }: IEvent) {
    const readableDateFrom = format(new Date(dateFrom), "dd.MM.yyyy");
    const readableDateTo = format(new Date(dateTo), "dd.MM.yyyy");

    if (readableDateFrom !== readableDateTo) return "";

    const date = format(new Date(dateFrom), "dd.MM.yyyy");

    return `${date} ${format(new Date(dateFrom), "hh:mm")}-${format(
      new Date(dateTo),
      "hh:mm"
    )}`;
  }

  mapDtoToReadModel(dto: IEvent): IEventReadModel {
    return {
      ...dto,
      eventDuration: this.getEventDuration(dto),
      fullAddress: `${dto.address.city}, ${dto.address.street} ${dto.address.houseNumber}`,
    };
  }
}
