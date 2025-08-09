{
  type frontendDev = {
    skills: string[];
    resignation1: "frontend";
  };
  type BackendDev = {
    skills: string[];
    resignation2: "backend";
  };
  type FullStackDev = frontendDev & BackendDev;
  const fullStackDev: FullStackDev = {
    skills: ["html", "css", "express"],
    resignation1: "frontend",
    resignation2: "backend",
  };
  console.log(fullStackDev);

  type Student = {
    name: string;
    age: number;
    id: number;
    address: string;
    section: "manobik" | "biggan"; //union type অর্থাৎ যেকোনো একটা দিতে হবে;
    contactNo: string;
    commonSubject: "bangla";
  };

  const student: Student = {
    name: "abdullah",
    address: "dhaka",
    id: 234,
    section: "manobik",
    contactNo: "017000000",
    age: 23,
    commonSubject: "bangla",
  };
  console.log(student);
}
