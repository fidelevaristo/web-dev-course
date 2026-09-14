const tariffa = "HB";

switch (tariffa) {
  case "BB":
    console.log("Tariffa BB --> 50€");
    break;
  case "HB":
    console.log("Tariffa HB --> 80€");
    break;
  case "FB":
    console.log("Tariffa FB --> 100€");
    break;
  default:
    console.log("Tariffa non valida");
}
