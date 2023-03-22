import React from "react";
import { useAuth } from "@/store/index";
import { useRouter } from "next/navigation";
import { EventsListUI, useMyEventsList } from "@/modules/account/my-events";
import { Routes } from "@/constants/routes";

export const EventsList = () => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  const { events } = useMyEventsList();

  // if (!isLoggedIn) return router.push(Routes.Login);

  return (
    <main className="screen-size flex flex-col">
      <h1 className="text-3xl font-medium mt-36">My events</h1>

      <EventsListUI.EmptyState events={events} />
    </main>
  );
};
