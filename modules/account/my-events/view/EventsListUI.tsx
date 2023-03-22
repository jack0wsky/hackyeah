import React from "react";
import { Button } from "@/modules/shared";
import { Routes } from "@/constants/routes";

interface Props {
  events: any[];
}
const EmptyState = ({ events }: Props) => {
  if (!!events.length) return null;

  return (
    <div className="w-full h-[400px] mt-24 bg-gray-100 rounded-3xl flex flex-col gap-y-8 justify-center items-center">
      <h2 className="text-2xl">You do not have any events</h2>
      <Button variant="primary" href={Routes.AddEvent}>
        Add event
      </Button>
    </div>
  );
};

export const EventsListUI = {
  EmptyState,
};
