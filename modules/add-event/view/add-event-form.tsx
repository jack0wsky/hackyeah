import { ModalWrapper } from "../../shared/modal-wrapper";
import { AddLeftoverModalView } from "../leftovers/add-leftover-modal-view";
import Link from "next/link";
import { CoverGraphic } from "../cover-graphic";
import { Details } from "../detalls";
import { Leftovers } from "../leftovers/leftovers";
import Button from "../../shared/button";
import { useStore } from "../../../store";

export const AddEventForm = () => {
  const { addEvent, modal } = useStore();

  const validateForm = (): boolean => {
    const { name, description, start, end, leftovers } = addEvent;

    const startTime = !!start.date && !!start.time;
    const endTime = !!end.date && !!end.time;

    return (
      !!name && !!description && startTime && endTime && !!leftovers.length
    );
  };

  return (
    <main className="screen-size">
      {modal.modalType === "add-leftover" && (
        <ModalWrapper>
          <AddLeftoverModalView />
        </ModalWrapper>
      )}
      <Link href="pages/for-organizators/add-event/index">My events</Link>
      <form onSubmit={(event) => event.preventDefault()} className="mt-10">
        <CoverGraphic />

        <Details />
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
