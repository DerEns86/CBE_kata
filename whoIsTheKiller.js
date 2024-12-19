function killer(suspectInfo, dead) {
  for (const suspect in suspectInfo) {
    const element = suspectInfo[suspect];

    if (dead.every((victim) => element.includes(victim))) {
      console.log("The Killer is: ", suspect);

      return suspect;
    }
  }
}
killer(
  {
    James: ["Jacob", "Bill", "Lucas"],
    Johnny: ["David", "Kyle", "Lucas"],
    Peter: ["Lucy", "Kyle"],
  },
  ["Lucas", "Bill"]
);
