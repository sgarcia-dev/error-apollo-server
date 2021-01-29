const faker = require('faker');

const books = Array
  .from(Array(10))
  .map((x, i) => ({
    title: faker.lorem.sentence(),
    author: faker.name.findName(),
  }))

const resolvers = {
  Query: {
    books: () => books,
  },
};

module.exports = { resolvers }