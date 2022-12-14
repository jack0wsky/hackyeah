import type { IEventItem, ItemType } from "../../types";
import { BASE_URL } from "../../clients/api-client";
import Link from "next/link";
import Image from "next/image";
import Pill from "../shared/pill";
import Button from "../shared/button";
import { format } from "date-fns";
import CalendarIcon from "../icons/calendar-icon";
import LocationIcon from "../icons/location-icon";

interface IEventItemProps extends IEventItem {
  mode: "card" | "list-item";
}

interface TagsProps {
  tags: Capitalize<ItemType>[];
}

const OrganizatorData = ({
  ownerName,
  ownerLogo,
}: {
  ownerName: string;
  ownerLogo: string;
}) => {
  const imageUrl = `${BASE_URL}${ownerLogo}`;

  return (
    <div className="flex gap-x-8 items-center">
      <div className="h-20 w-20 rounded-full bg-black/10 relative overflow-hidden">
        {!!ownerLogo && (
          <Image
            className="w-full h-full object-cover"
            src={imageUrl}
            alt={ownerName}
            fill
          />
        )}
      </div>
      <p>{ownerName}</p>
    </div>
  );
};

const Tags = ({ tags }: TagsProps) => (
  <ul className="flex gap-x-8">
    {tags.map((tag) => (
      <li key={tag}>
        <Pill>{tag}</Pill>
      </li>
    ))}
  </ul>
);

const EventItem = ({
  id,
  name,
  ownerName,
  ownerLogo,
  city,
  address,
  banner,
  tags,
  mode,
  dateFrom,
  dateTo,
}: IEventItemProps) => {
  const imageUrl = `${BASE_URL}${banner}`;

  const readableDateFrom = format(new Date(dateFrom), "dd.MM.yyyy");
  const readableDateTo = format(new Date(dateTo), "dd.MM.yyyy");

  const date =
    readableDateFrom === readableDateTo
      ? `${format(new Date(dateFrom), "hh:mm")}-${format(
          new Date(dateTo),
          "hh:mm"
        )}`
      : null;

  if (mode === "card") {
    return (
      <li className="w-full flex flex-col items-center rounded-16 shadow-tile overflow-hidden">
        <div className="w-full flex justify-center items-center h-[146px] relative overflow-hidden">
          {!!banner && (
            <Image
              className="w-full h-full object-cover"
              src={imageUrl}
              alt={name}
              fill
            />
          )}
        </div>

        <div className="flex p-20 w-full min-h-[100px]">
          <div className="flex flex-col justify-between w-1/2">
            <div className="flex flex-col">
              <OrganizatorData ownerName={ownerName} ownerLogo={ownerLogo} />
              <h2 className="text-[24px] font-normal">{name}</h2>
            </div>

            <Tags tags={tags} />
          </div>

          <div className="w-1/2 flex flex-col justify-between items-end">
            <p className="mb-16 text-dark-blue flex gap-x-4 items-center">
              <CalendarIcon />
              <p className="p-4">
                {format(new Date(dateFrom), "dd.MM.yyyy")} {date}
              </p>
            </p>
            <p className="mb-24 text-grey-400 flex items-center gap-x-8">
              <LocationIcon />
              <span>
                {city}, {address}
              </span>
            </p>

            <Button variant="primary" href={`/events-list/${id}`}>
              See available waste
            </Button>
          </div>
        </div>
      </li>
    );
  }

  return (
    <Link
      className="w-full h-[150px] p-12 flex gap-x-12 items-center border-1 border-black"
      href="/"
    >
      <div className="w-1/2 h-full bg-black/30 relative">
        {!!banner && <Image src={imageUrl} alt={`${name} banner`} fill />}
      </div>
      <div className="flex flex-col">
        <OrganizatorData ownerLogo={ownerLogo} ownerName={ownerName} />

        <h2 className="text-[24px] font-normal">{name}</h2>
        <p>
          {city}, {address}
        </p>
        <Tags tags={tags} />
      </div>
    </Link>
  );
};

export default EventItem;
