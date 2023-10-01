import { Transaction } from "./Transaction";
import { CurrencyEnum } from "./CurrencyEnum";

export class Card {
  transactions: Transaction[] = [];

  addTransaction = (transaction: Transaction): string => {
    this.transactions.push(transaction);
    return transaction.id;
  };

  getTransaction = (id: string): Transaction | undefined =>
    this.transactions.find((transaction) => transaction.id === id);

  getBalance = (currency: CurrencyEnum): number =>
    this.transactions
      .filter((transaction) => transaction.currency === currency)
      .reduce((total, transaction) => total + transaction.amount, 0);
}
