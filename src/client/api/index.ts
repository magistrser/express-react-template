import axios, { AxiosInstance } from "axios";
import { ExampleData } from "@common/ExampleData";
import { createExampleDataRequest } from "@common/request";

const API_SERVER_ADDRESS = window.location.host;
console.log(API_SERVER_ADDRESS);
const API_ADDRESS = `http://${API_SERVER_ADDRESS}`;

export class Api {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({ baseURL: API_ADDRESS });
    if (process.env.NODE_ENV === "development") {
      this.axiosInstance = axios.create({ baseURL: "http://localhost:8080" });
    }
  }

  async getExampleData(): Promise<ExampleData> {
    return (await this.axiosInstance.get(createExampleDataRequest())).data;
  }
}

export const api = new Api();
