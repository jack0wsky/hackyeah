"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import type {
  IEventReadModel,
  EventLeftoverTypes,
} from "@/modules/events-list/types/event";
import { BASE_URL } from "@/clients/api-client";
import { Pill, Button } from "@/modules/shared";
import { CalendarIcon, LocationIcon } from "@/modules/shared/icons";

interface IEventItemProps extends IEventReadModel {
  mode: "card" | "list-item";
}

interface TagsProps {
  tags: Capitalize<EventLeftoverTypes>[];
}

export const OrganizatorProfile = ({
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
    {!!tags.length &&
      tags.map((tag) => (
        <li key={tag}>
          <Pill icon={<div />}>{tag}</Pill>
        </li>
      ))}
  </ul>
);

export const EventCard = ({
  id,
  name,
  ownerName,
  ownerLogo,
  address,
  banner,
  tags,
  mode,
  fullAddress,
  eventDuration,
}: IEventItemProps) => {
  const imageUrl = `${BASE_URL}${banner}`;

  if (mode === "card") {
    return (
      <li className="w-full flex flex-col items-center rounded-16 shadow-xl overflow-hidden">
        <div className="w-full flex justify-center items-center h-[146px] relative overflow-hidden"></div>

        <div className="flex p-20 w-full min-h-[100px]">
          <div className="flex flex-col justify-between w-1/2">
            <div className="flex flex-col">
              <OrganizatorProfile ownerName={ownerName} ownerLogo={ownerLogo} />
              <p className="text-[24px] font-normal">{name}</p>
            </div>

            <Tags tags={tags} />
          </div>

          <div className="w-1/2 flex flex-col justify-between items-end">
            <div className="mb-16 text-dark-blue flex gap-x-4 items-center">
              <CalendarIcon />
              <p className="p-4">{eventDuration}</p>
            </div>
            <div className="mb-24 text-grey-400 flex items-center gap-x-8">
              <LocationIcon />
              <p>{fullAddress}</p>
            </div>

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
      href="/pages"
    >
      <div className="w-1/2 h-full bg-black/30 relative">{/* image */}</div>
      <div className="flex flex-col">
        <OrganizatorProfile ownerLogo={ownerLogo} ownerName={ownerName} />

        <h2 className="text-[24px] font-normal">{name}</h2>
        <p>
          {address.city}, {address.street}
        </p>
      </div>
    </Link>
  );
};
