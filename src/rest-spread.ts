{
  const friends1: string[] = ["aami", "tumi", "she", "he", "hum"];

  const friends2: string[] = ["abul", "babul", "sabul", "dabul"];

  friends1.push(...friends2);
  //   console.log(friends1);

  interface user {
    name: string;
    age: number;
    salary: boolean;
  }

  const user1: user = {
    name: "halim",
    age: 99,
    salary: true,
  };
  const user2: user = {
    name: "rakim",
    age: 33,
    salary: false,
  };

  const userList: user[] = [user1, user2];
  console.log(userList);
}
