//Primitive Data Types;
let name: string = "Developer";

name = "345";

let age: number = 455;
age = 18;

let isMarried: boolean = false;
isMarried = true;

let emptyValues: null = null;

let notAssigned: undefined = undefined;

function nothingToReturn(): void {
  console.log("nothing to return that is void types");
}

//Non Primitive Data types;

// Array//

const friends: string[] = ["abir", "amir", "rohim", "korib"];
console.log(friends);
friends[3] = "karim";

console.log(friends);

//tuple

const students: [string, number, boolean] = ["Abid", 22, false];
console.log(students);
