// THIS FILE IS DEPRECIATED THIS IS NOT PART OF OUR PROJECT. THIS WAS MADE TO GENERATE DATA

const { faker } = require('@faker-js/faker');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function generateFakeUsers(numUsers) {
  const users = [];

  for (let i = 0; i < numUsers; i++) {
    const fullName = faker.person.fullName();
    const firstName = fullName.split(' ')[0];  

    const user = {
      full_Name: fullName,
      email: faker.internet.email(),
      password: faker.internet.password(),
      displayName: firstName,  
    };

    users.push(user);
  }

  return users;
}

async function saveUsersToDatabase(users) {
  for (const user of users) {
    try {
      await prisma.user.create({
        data: user,
      });
      console.log(` User ${user.email} saved.`);
    } catch (err) {
      console.error(` Error saving user ${user.email}:`, err.message);
    }
  }
}

async function main() {
  const numUsers = 50000;
  const fakeUsers = await generateFakeUsers(numUsers);
  await saveUsersToDatabase(fakeUsers);
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(" Error:", err.message);
  prisma.$disconnect();
});
