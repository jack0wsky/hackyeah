import { ApiClient } from "@/clients/api-client";
import { useQuery } from "react-query";
import { da } from "date-fns/locale";

export const useEventDetails = (eventId: string) => {
  const api = new ApiClient();

  const { data, isLoading } = useQuery("event-details", () =>
    api.getEventDetails(eventId)
  );

  console.log(data);

  return {
    event: data,
    loading: isLoading,
  };
};
