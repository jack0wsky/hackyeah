import Layout from "../../../modules/shared/layout";
import { CoverGraphic } from "../../../modules/add-event/cover-graphic";
import { Details } from "../../../modules/add-event/detalls";
import Link from "next/link";
import { Leftovers } from "../../../modules/add-event/leftovers/leftovers";
import Button from "../../../modules/shared/button";
import { useStore } from "../../../store";
import { ModalWrapper } from "../../../components/modal-wrapper";
import { AddLeftoverModalView } from "../../../modules/add-event/leftovers/add-leftover-modal-view";

const Index = () => {
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
    <Layout title="Add event">
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
    </Layout>
  );
};

export default Index;
