function add(num1: number, num2: number): number {
  return num1 + num2;
}
const result = add(3, 7);
console.log(result);

const user = {
  name: "abdullah",
  age: 22,
  balance: 200,
  addMoney(balance: number) {
    return this.balance + balance;
  },
};

console.log(user.addMoney(20));
