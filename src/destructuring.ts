{
  //object destructuring
  const user = {
    name: "parsi",
    age: 11,
    home: "dhaka",
  };

  const { name, age, home } = user;
  console.log(home, age, name);

  // array destructuring

  const friends: string[] = ["hello", "hi", "kaman", "achan"];

  const [hello, hi, , achen] = friends;
  console.log(hello, hi, achen);
}
