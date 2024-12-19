var number = function (busStops) {
  let passengers = 0;

  busStops.forEach((element) => {
    passengers += element[0];
    passengers -= element[1];
  });
  console.log("People in the bus: ", passengers);

  return passengers;
};

number([
  [10, 0],
  [3, 5],
  [5, 8],
]);
