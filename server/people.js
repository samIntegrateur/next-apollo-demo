const faker = require("faker");

exports.people = () => {
  const people = [];
  let i = 0;
  while (i < 20) {
    const person = {
      name: faker.name.findName(),
      city: faker.address.city(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
    };
    people.push(person);
    i++;
  }
  return people;
};
