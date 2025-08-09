// reference type with object
const user: {
  company: "Programming Hero"; // value assign as a type that is literal type;
  firstName: string;
  middleName: string;
  lastName?: string; //optional type with ! sign;
  isMarried: boolean;
} = {
  firstName: "Abdur",
  middleName: "rohim",
  lastName: "Khan",
  isMarried: true,
  company: "Programming Hero",
};

user.middleName = "rajjak";

for (const key in user) {
  if (user.hasOwnProperty(key)) {
    const element = user[key as keyof typeof user];
    console.log(element);
  }
}

// console.log(user);
