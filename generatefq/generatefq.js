// THIS FILE IS DEPRECIATED THIS IS NOT PART OF OUR PROJECT. THIS WAS MADE TO GENERATE DATA

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

function getRandomDateThisYear() {
  const start = new Date('2025-01-01');
  const end = new Date('2025-12-31');
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function createFriendRequestsForAllUsers() {
  try {
    const users = await prisma.user.findMany();
    const userIds = users.map(u => u.user_id);

    const requests = new Set(); // To prevent duplicates
    const batchSize = 100;
    let batch = [];

    for (const sender of users) {
      const numRequests = getRandomInt(2, 5);
      let sent = 0;

      while (sent < numRequests) {
        const receiverId = userIds[Math.floor(Math.random() * userIds.length)];

        // Avoid self-requests and duplicates
        const key = `${sender.user_id}-${receiverId}`;
        if (sender.user_id === receiverId || requests.has(key)) continue;

        requests.add(key);
        sent++;

        const status = Math.random() < 0.5 ? 'pending' : 'accepted';
        const timestamp = getRandomDateThisYear();

        batch.push(
          prisma.friendRequest.create({
            data: {
              sender_id: sender.user_id,
              receiver_id: receiverId,
              status,
              timestamp,
            },
          })
        );

        if (batch.length >= batchSize) {
          await Promise.allSettled(batch);
          console.log(` Inserted batch of ${batch.length}`);
          batch = [];
        }
      }
    }

   
    if (batch.length > 0) {
      await Promise.allSettled(batch);
      console.log(` Final batch inserted`);
    }

    console.log(' Finished creating friend requests for all users.');
  } catch (err) {
    console.error('Error creating friend requests:', err.message);
  } finally {
    await prisma.$disconnect();
  }
}

createFriendRequestsForAllUsers();
