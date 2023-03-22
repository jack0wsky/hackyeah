import { useQuery } from "react-query";
import { ApiClient } from "@/clients/api-client";

export const useMyEventsList = () => {
  const api = new ApiClient();

  const { data, isLoading } = useQuery("my-events", () => api.getMyEvents(), {
    retry: 1,
  });

  return {
    events: data || [],
    loading: isLoading,
  };
};
