import { Card } from "./Card";
import { Transaction } from "./Transaction";
import { CurrencyEnum } from "./CurrencyEnum";

const card = new Card();

const transaction1 = new Transaction(100, CurrencyEnum.USD);
const id1 = card.addTransaction(transaction1);
console.log(`Added transaction with id ${id1} (${transaction1.amount} USD)`);

const transaction2 = new Transaction(180, CurrencyEnum.UAH);
const id2 = card.addTransaction(transaction2);
console.log(`Added transaction with id ${id2} (${transaction2.amount} UAH)`);

const transaction3 = new Transaction(50, CurrencyEnum.USD);
const id3 = card.addTransaction(transaction3);
console.log(`Added transaction with id ${id3} (${transaction3.amount} USD)`);

const transaction4 = new Transaction(75, CurrencyEnum.UAH);
const id4 = card.addTransaction(transaction4);
console.log(`Added transaction with id ${id4} (${transaction4.amount} UAH)`);

const transaction5 = new Transaction(150, CurrencyEnum.USD);
const id5 = card.addTransaction(transaction5);
console.log(`Added transaction with id ${id5} (${transaction4.amount} USD)`);

const balanceInUSD = card.getBalance(CurrencyEnum.USD);
console.log(`Balance in USD : ${balanceInUSD}`);

const balanceInUAH = card.getBalance(CurrencyEnum.UAH);
console.log(`Balance in UAH : ${balanceInUAH}`);
