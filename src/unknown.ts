{
  function checkMinutes(value: unknown) {
    if (typeof value == "number") {
      const minutes = value / 60;
      return minutes;
    } else if (typeof value === "string") {
      const [secValue = "0"] = value.split(" ");
      const strMinutes = parseFloat(secValue) / 60;

      return strMinutes;
    } else {
      console.log("wrong input vaya");
    }
  }

  const result = checkMinutes("1000 seconds");
  console.log(result?.toFixed(0), "minutes");

  //
}
