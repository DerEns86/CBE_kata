const whosOnline = (friends) => {
  // Your code here...

  let status = {
    online: [],
    offline: [],
    away: [],
  };

  friends.forEach((element) => {
    switch (element.status) {
      case "offline":
        status.offline.push(element.username);
        break;
      case "online":
        if (element.lastActivity <= 10) {
          status.online.push(element.username);
        } else {
          status.away.push(element.username);
        }
    }
  });
  for (let key in status) {
    if (status[key].length === 0) {
      delete status[key];
    }
  }

  return status;
};

friends = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

friends = [
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

console.log(whosOnline(friends));
