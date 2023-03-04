import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

import { useStore } from "@/store/index";
import { ApiClient } from "@/clients/api-client";
import { EventMapper } from "@/modules/events-list/mapper";
import type { IEvent } from "@/modules/events-list/types/event";

const api = new ApiClient();

const eventMapper = new EventMapper();

interface IEventResponse {
  count: number;
  next: null;
  previous: null;
  results: IEvent[];
}

export const useEventsList = () => {
  const [pagination, setPagination] = useState({
    page: 0,
    totalAmount: 0,
  });

  const { filters } = useStore();

  const {
    data: events,
    isLoading,
    error,
  } = useQuery("events.list", async () => {
    return await axios
      .get<IEventResponse>(api.getEvents())
      .then((dto) =>
        dto.data.results.map((dtoItem) =>
          eventMapper.mapDtoToReadModel(dtoItem)
        )
      );
  });

  return {
    events: events || [],
    pagination,
    updatePagination: setPagination,
  };
};
