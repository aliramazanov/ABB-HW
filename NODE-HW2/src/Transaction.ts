import { v4 as uuidv4 } from "uuid";
import { CurrencyEnum } from "./CurrencyEnum";

export class Transaction {
  id: string;
  amount: number;
  currency: CurrencyEnum;

  constructor(amount: number, currency: CurrencyEnum) {
    this.id = uuidv4();
    this.amount = amount;
    this.currency = currency;
  }
}
