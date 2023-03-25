import axios, { AxiosResponse } from "axios";
import { QueryClient } from "react-query";
import { USER_TOKEN_KEY } from "@/constants/auth";
import { da } from "date-fns/locale";

export const BASE_URL = "https://zygmuntd.eu.pythonanywhere.com";

export const client = new QueryClient();

export const apiClient = axios.create({
  baseURL: BASE_URL,
});

export class ApiClient {
  private readonly baseUrl: string;

  constructor() {
    this.baseUrl = BASE_URL;
  }

  getEvents(): string {
    return `${this.baseUrl}/events/`;
  }

  async getEventDetails(id: string) {
    const response = await apiClient.get(`${this.baseUrl}/user/events/${id}/`);
    return response;
  }

  async login(data: {
    username: string;
    password: string;
  }): Promise<AxiosResponse<{ token: string }>> {
    return await apiClient.post("/login/", data);
  }

  async getMyEvents(): Promise<unknown[] | void> {
    const token = localStorage.getItem(USER_TOKEN_KEY);

    if (!token) return;

    const { data } = await apiClient.get("/user/events/", {
      headers: { Authorization: `Token ${token}` },
    });

    return data;
  }

  async createEvent() {
    return await apiClient.post("/user/event/", {
      city: "",
      name: "",
      address: "",
      date_from: "",
      date_to: "",
      products: [],
    });
  }
}
