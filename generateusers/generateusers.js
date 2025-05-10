const faker = require('faker');  // Make sure you're using the correct version of the faker package
const { PrismaClient } = require('@prisma/client');  // Prisma Client for database interaction

const prisma = new PrismaClient();  // Initialize Prisma Client

// Function to generate fake users
async function generateFakeUsers(numUsers) {
  const users = [];

  for (let i = 0; i < numUsers; i++) {
    const user = {
      full_name: faker.person.fullName(),  // Use person.fullName() for the full name
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),  // You should ideally hash the password before saving
      dob: faker.date.past(18, new Date()),  // Generate a random date of birth for a user aged 18+
      created_at: faker.date.recent()  // Create a recent date for 'created_at'
    };
    users.push(user);
  }

  return users;
}

// Function to save fake users to the database
async function saveUsersToDatabase(users) {
  for (const user of users) {
    try {
      await prisma.user.create({
        data: user
      });
      console.log(`✅ User ${user.username} saved.`);
    } catch (err) {
      console.error(`❌ Error saving user ${user.username}:`, err.message);
    }
  }
}

async function main() {
  const numUsers = 10;  // Number of fake users to generate
  const fakeUsers = await generateFakeUsers(numUsers);  // Generate fake users
  await saveUsersToDatabase(fakeUsers);  // Save them to the database

  // Disconnect Prisma client
  await prisma.$disconnect();
}

// Call the main function
main().catch((err) => {
  console.error("❌ Error:", err.message);
  prisma.$disconnect();
});