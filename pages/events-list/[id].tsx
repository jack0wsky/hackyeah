import React from "react";
import dynamic from "next/dynamic";

import { EventDetailsPage as EventDetails } from "@/modules/event/view/event-details";

const Component = dynamic(() => Promise.resolve(EventDetails), { ssr: false });

export default Component;
