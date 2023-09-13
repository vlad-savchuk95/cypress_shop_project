import { faker } from "@faker-js/faker";

export const generateUserData = () => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.number("+1415#######"),
  password: "password123",
  existingEmail: "JohnTest@gmail.com",
});