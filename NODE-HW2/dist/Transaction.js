"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const uuid_1 = require("uuid");
class Transaction {
    constructor(amount, currency) {
        this.id = (0, uuid_1.v4)();
        this.amount = amount;
        this.currency = currency;
    }
}
exports.Transaction = Transaction;
