import axios, { AxiosInstance } from "axios";

interface Player {
  id: string;
  name: string;
}

interface Room {
  code: string;
  players: Player[];
}

export default class FlunkyBallApi {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: "http://localhost:8080",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  public async createRoom(name: string) {
    const res = await this.client.post<Room>("/room", { name });
    return res.data;
  }
}
