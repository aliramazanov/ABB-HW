"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
class Card {
    constructor() {
        this.transactions = [];
        this.addTransaction = (transaction) => {
            this.transactions.push(transaction);
            return transaction.id;
        };
        this.getTransaction = (id) => this.transactions.find((transaction) => transaction.id === id);
        this.getBalance = (currency) => this.transactions
            .filter((transaction) => transaction.currency === currency)
            .reduce((total, transaction) => total + transaction.amount, 0);
    }
}
exports.Card = Card;
