{
  type User = {
    name: string;
    address: {
      presentAddress: string;
      permanentAddress: undefined;
    };
  };
  const user: User = {
    name: "ami",
    address: {
      presentAddress: "ache",
      permanentAddress: undefined,
    },
  };
  // value null/undefined হলে ?? দিয়ে পরিবর্তন করে দেওয়া যায়; একে বলে nullish coalescing operator ;
  const address = user?.address?.permanentAddress ?? "nai";
  console.log(address);
}
