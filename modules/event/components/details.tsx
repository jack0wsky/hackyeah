import React from "react";
import { OrganizatorProfile } from "@/modules/event/components/event-card";
import { LocationIcon } from "@/modules/shared/icons";
import { format } from "date-fns";

interface IDetailsProps {
  address: string;
  dateFrom: Date;
  dateTo: Date;
}

export const Details = ({ address, dateFrom, dateTo }: IDetailsProps) => {
  return (
    <div className="w-full flex flex-col mt-10">
      <div className="w-full flex justify-between">
        <OrganizatorProfile ownerName="EL Passion" ownerLogo="" />

        <div className="flex flex-col items-end">
          <p>
            {format(dateFrom, "dd.MM.yyyy")} - {format(dateTo, "dd.MM.yyyy")}
          </p>
          <div className="text-grey-400 flex items-center gap-x-2">
            <LocationIcon />
            <p>{address}</p>
          </div>
        </div>
      </div>

      <p className="mt-10 text-dark-blue">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  );
};
