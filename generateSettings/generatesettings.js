// THIS FILE IS DEPRECIATED THIS IS NOT PART OF OUR PROJECT. THIS WAS MADE TO GENERATE DATA

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function assignUserSettings() {
  try {
    const users = await prisma.user.findMany();

    for (const user of users) {
      // Check if user already has settings
      const existingSettings = await prisma.userSettings.findUnique({
        where: { user_id: user.user_id },
      });

      // Randomly assign dark_mode true or false
      const darkMode = Math.random() < 0.5;

      if (!existingSettings) {
        await prisma.userSettings.create({
          data: {
            user_id: user.user_id,
            currency: 'USD',
            dark_mode: darkMode,
          },
        });
        console.log(`Created settings for user ${user.user_id}: currency USD, dark_mode ${darkMode}`);
      } else {
        console.log(`ℹSettings already exist for user ${user.user_id}, skipping...`);
      }
    }
  } catch (err) {
    console.error(' Error assigning user settings:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

assignUserSettings();
