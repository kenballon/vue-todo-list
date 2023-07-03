function printDate() {
  const today = new Date();
  const options = { month: "long", day: "numeric", year: "numeric" };
  const date = today.toLocaleDateString("en-US", options);

  return date;
}

var player = GetPlayer();
player.SetVar("SystemDate", printDate());
