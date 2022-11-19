import axios from "axios";

const BASE_URL = "http://10.250.166.11:8080/";

export const apiClient = axios.create({
  baseURL: BASE_URL,
});

export class ApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = BASE_URL;
  }

  async getEvents() {
    const { data } = await apiClient.get("/events");
    return data;
  }
}
