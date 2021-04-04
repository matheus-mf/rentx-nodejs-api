import { v4 as uuidV4 } from "uuid";

export default class Car {
  id: string;

  description: string;

  daily_rate: number;

  available: boolean;

  license_plate: string;

  fine_amount: number;

  branch: string;

  created_at: Date;

  update_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.available = true;
      this.created_at = new Date();
    }
  }
}
