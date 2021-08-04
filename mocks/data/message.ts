const faker = require("faker");
export default {
  id: "1",
  users: [
    {
      id: "u1",
      name: faker.name.findName(),
      imageUri: faker.image.avatar(),
    },
    {
      id: "2",
      name: faker.name.findName(),
      imageUri: faker.image.avatar(),
    },
  ],
  messages: [
    {
      id: "m1",
      content: faker.lorem.words(),
      createdAt: faker.date.recent(),
      user: {
        id: "u1",
        name: faker.name.findName(),
        imageUri: faker.image.avatar(),
        userName: faker.internet.userName(),
      },
    },
    {
      id: "m2",
      content: faker.lorem.sentences(),
      createdAt: faker.date.recent(),
      user: {
        id: "u2",
        name: faker.name.findName(),
        imageUri: faker.image.avatar(),
        userName: faker.internet.userName(),
      },
    },
    {
      id: "m3",
      content: faker.lorem.words(),
      createdAt: faker.date.recent(),
      user: {
        id: "u1",
        name: faker.name.findName(),
        imageUri: faker.image.avatar(),
        userName: faker.internet.userName(),
      },
    },
    {
      id: "m4",
      content: faker.lorem.sentences(),
      createdAt: faker.date.recent(),
      user: {
        id: "u2",
        name: faker.name.findName(),
        imageUri: faker.image.avatar(),
        userName: faker.internet.userName(),
      },
    },
    {
      id: "m5",
      content: faker.lorem.words(),
      createdAt: faker.date.recent(),
      user: {
        id: "u1",
        name: faker.name.findName(),
        imageUri: faker.image.avatar(),
        userName: faker.internet.userName(),
      },
    },
    {
      id: "m6",
      content: faker.lorem.sentences(),
      createdAt: faker.date.recent(),
      user: {
        id: "u2",
        name: faker.name.findName(),
        imageUri: faker.image.avatar(),
        userName: faker.internet.userName(),
      },
    },
    {
      id: "m7",
      content: faker.lorem.words(),
      createdAt: faker.date.recent(),
      user: {
        id: "u1",
        name: faker.name.findName(),
        imageUri: faker.image.avatar(),
        userName: faker.internet.userName(),
      },
    },
    {
      id: "m8",
      content: faker.lorem.sentences(),
      createdAt: faker.date.recent(),
      user: {
        id: "u2",
        name: faker.name.findName(),
        imageUri: faker.image.avatar(),
        userName: faker.internet.userName(),
      },
    },
    {
      id: "m9",
      content: faker.lorem.words(),
      createdAt: faker.date.recent(),
      user: {
        id: "u1",
        name: faker.name.findName(),
        imageUri: faker.image.avatar(),
        userName: faker.internet.userName(),
      },
    },
    {
      id: "m10",
      content: faker.lorem.sentences(),
      createdAt: faker.date.recent(),
      user: {
        id: "u2",
        name: faker.name.findName(),
        imageUri: faker.image.avatar(),
        userName: faker.internet.userName(),
      },
    },
    {
      id: "m11",
      content: faker.lorem.words(),
      createdAt: faker.date.recent(),
      user: {
        id: "u1",
        name: faker.name.findName(),
        imageUri: faker.image.avatar(),
        userName: faker.internet.userName(),
      },
    },
    {
      id: "m12",
      content: faker.lorem.sentences(),
      createdAt: faker.date.recent(),
      user: {
        id: "u2",
        name: faker.name.findName(),
        imageUri: faker.image.avatar(),
        userName: faker.internet.userName(),
      },
    },
  ],
};
