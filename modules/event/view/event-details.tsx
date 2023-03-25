import Link from "next/link";
import { IEvent, EventLeftoverTypes } from "@/modules/events-list/types/event";
import { EventMapper } from "@/modules/events-list/mapper";
import { Banner } from "@/modules/event/components/banner";
import { Details } from "@/modules/event/components/details";
import { Leftovers } from "@/modules/event/components/leftovers";
import { add } from "date-fns";
import { StaticMapGenerator } from "@/utils/static-map-generator";
import { useEventDetails } from "@/modules/event";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import * as console from "console";

interface IEventDetailsPageProps {
  params: {
    id: string;
  };
}

export const EventDetailsPage = ({ params }: IEventDetailsPageProps) => {
  const { event } = useEventDetails(params.id);

  // const { address, detailsAddressLabel } = event;

  /*
  const mapGenerator = new StaticMapGenerator(
    detailsAddressLabel,
    address.postalCode,
    address.city,
    "PL"
  );

   */

  // const url = await mapGenerator.generate();

  return (
    <main className="screen-size">
      <Link href="/">Less waste events</Link>
      <div className="w-full flex flex-col-reverse sm:flex-row gap-x-16 justify-between mt-10 h-screen">
        <div className="w-full sm:w-7/12 flex flex-col">
          <Banner />
        </div>

        <div className="w-full sm:w-5/12 h-1/4 sm:h-3/4 rounded-16 bg-gray-100 relative overflow-hidden"></div>
      </div>
    </main>
  );
};
