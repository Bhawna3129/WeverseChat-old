var faker = require("faker");
export default [
  {
    id: "1",
    users: [
      {
        id: "u1",
        name: faker.name.findName(),
        imageUri: faker.image.avatar(),
      },
      {
        id: "u2",
        name: faker.name.findName(),
        imageUri: faker.image.avatar(),
      },
    ],
    lastMessage: {
      id: "m1",
      content: faker.lorem.words(),
      createdAt: "2020-10-03T14:48:00.000z",
    },
  },
  {
    id: "2",
    users: [
      {
        id: "u1",
        name: faker.name.findName(),
        imageUri: faker.image.avatar(),
      },
      {
        id: "u2",
        name: faker.name.findName(),
        imageUri: faker.image.avatar(),
      },
    ],
    lastmessage: {
      id: "m1",
      content: faker.lorem.sentence(),

      createdAt: "2020-10-03T14:48:00.000z",
    },
  },
  {
    id: "3",
    users: [
      {
        id: "u1",
        name: faker.name.findName(),
        imageUri: faker.image.avatar(),
      },
      {
        id: "u2",
        name: faker.name.findName(),
        imageUri: faker.image.avatar(),
      },
    ],
    lastmessage: {
      id: "m1",
      content: faker.lorem.sentence(),

      createdAt: "2020-10-03T14:48:00.000z",
    },
  },
];
