import Layout from "../../shared/layout";
import Link from "next/link";
import { Banner } from "../components/banner";
import { Details } from "../components/details";
import { IEventReadModel } from "../../events-list/types/event";
import { Leftovers } from "../components/leftovers";

interface IEventDetailsPageProps {
  event: IEventReadModel;
}

export const EventDetailsPage = ({ event }: IEventDetailsPageProps) => {
  return (
    <Layout title="Event">
      <main className="screen-size">
        <Link href="/">Less waste events</Link>
        <div className="w-full flex gap-x-16 justify-between mt-10 h-screen">
          <div className="w-7/12 flex flex-col">
            <Banner />

            <Details address={event.detailsAddressLabel} />

            <Leftovers items={event.leftovers} />
          </div>
          <div className="w-5/12 h-3/4 rounded-16 bg-gray-100"></div>
        </div>
      </main>
    </Layout>
  );
};
