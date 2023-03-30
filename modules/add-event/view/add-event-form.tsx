import Link from "next/link";
import {
  CoverGraphic,
  Leftovers,
  Details,
  Location,
} from "@/modules/add-event";
import { Button } from "@/modules/shared";
import { useStore } from "@/store/index";
import { useAuth } from "@/store/index";
import { useRouter } from "next/router";
import { Routes } from "@/constants/routes";

export const AddEventForm = () => {
  const { addEvent, modal } = useStore();
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  const validateForm = (): boolean => {
    const { name, description, start, end, leftovers } = addEvent;

    const startTime = !!start.date && !!start.time;
    const endTime = !!end.date && !!end.time;

    return (
      !!name && !!description && startTime && endTime && !!leftovers.length
    );
  };

  // if (!isLoggedIn) return router.push(Routes.Login);

  return (
    <main className="screen-size">
      <Link href={Routes.MyEvents}>My events</Link>
      <form onSubmit={(event) => event.preventDefault()} className="mt-10">
        <CoverGraphic />

        <Details />

        <Location />
      </form>

      <Leftovers />

      <div className="mb-40">
        <Button disabled={!validateForm()} variant="primary">
          Add event
        </Button>
      </div>
    </main>
  );
};
