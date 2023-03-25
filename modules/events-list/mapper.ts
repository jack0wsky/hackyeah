import type {
  IEvent,
  IEventReadModel,
} from "@/modules/events-list/types/event";
import { BASE_URL } from "@/clients/api-client";
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

  private constructAssetUrl(imageName: string) {
    if (!imageName) return "";

    return `${BASE_URL}${imageName}`;
  }

  mapDtoToReadModel(dto: IEvent): IEventReadModel {
    return {
      ...dto,
      eventDuration: this.getEventDuration(dto),
      fullAddress: `${dto.address.city}, ${dto.address.street} ${dto.address.houseNumber}`,
      detailsAddressLabel: `${dto.address.street} ${dto.address.houseNumber}, ${dto.address.postalCode} ${dto.address.city}`,
      ownerLogo: this.constructAssetUrl(dto.ownerLogo),
      banner: this.constructAssetUrl(dto.banner),
    };
  }
}
