import type { IEventItem } from "../../types";
import Link from "next/link";
import Image from "next/image";
import Pill from "../shared/pill";

interface IEventItemProps extends IEventItem {}

const EventItem = ({
  name,
  ownerName,
  city,
  address,
  eventBanner,
  tags,
}: IEventItemProps) => {
  return (
    <Link
      className="w-full h-[150px] p-12 flex gap-x-12 items-center border-1 border-black"
      href="/"
    >
      <div className="w-1/2 h-full bg-black/30">
        {!!eventBanner && <Image src={eventBanner} alt={`${name} banner`} />}
      </div>
      <div className="flex flex-col">
        <div className="flex gap-x-8 items-center">
          <div className="h-20 w-20 rounded-full bg-black/10"></div>
          <p>{ownerName}</p>
        </div>
        <h2 className="text-[22px]">{name}</h2>
        <p>
          {city}, {address}
        </p>
        <ul>
          {tags.map((tag) => (
            <li key={tag}>
              <Pill>{tag}</Pill>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default EventItem;
