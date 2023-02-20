import axios from "axios";
import { QueryClient } from "react-query";

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
