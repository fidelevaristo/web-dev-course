function somma(...numeri) {
  return numeri.reduce((acc, cur) => acc + cur, 0);
}

console.log("Somma (1, 2, 3, 4):", somma(1, 2, 3, 4));
console.log("Somma (10, 20, 30):", somma(10, 20, 30));
console.log("Somma ():", somma());
