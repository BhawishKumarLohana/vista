
const { PrismaClient } = require('@prisma/client');

let prisma;

if (typeof global !== 'undefined') {
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      log: ['query'], // optional: remove if not needed
    });
  }
  prisma = global.prisma;
} else {
  prisma = new PrismaClient({
    log: ['query'],
  });
}

module.exports = prisma;
