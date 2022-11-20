import axios from "axios";
import { IEventItem } from "../types";
import { parseApiEvents } from "../utils/parse-api-events";

export const BASE_URL = "http://10.250.166.11:8080";

export const apiClient = axios.create({
  baseURL: BASE_URL,
});

interface IGetEventsParams {
  page: number;
  searchPhrase?: string;
  city?: string;
  tags?: string[];
}

export class ApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = BASE_URL;
  }

  async getEvents({
    page,
    searchPhrase,
    city,
    tags,
  }: IGetEventsParams): Promise<{ totalAmount: number; items: IEventItem[] }> {
    let params = `?page=${page}&limit=6`;

    /*
    if (tags) {
      params += `&tags=[${tags.join(",")}]`;
    }

     */
    if (searchPhrase) {
      params += `&name=${searchPhrase}`;
    }
    if (city) {
      params += `&city=${city}`;
    }

    const { data } = await apiClient.get(`/events/${params}`);
    return { totalAmount: data.count, items: data.results.map(parseApiEvents) };
  }

  async createEvent() {
    await apiClient.post("/user/event/", {
      city: "",
      name: "",
      address: "",
      date_from: "",
      date_to: "",
      products: [],
    });
  }
}
