import prisma from "./db"; 

export async function createUserIfNotExists(googleUser) {
  const email = googleUser.email;

  if (!email) throw new Error("Google user has no email.");

  // Step 1: Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
    include: { settings: true },
  });

  if (existingUser) {
    return existingUser;
  }

  // Step 2: Create user + settings
  const newUser = await prisma.user.create({
    data: {
      email,
      displayName: googleUser.displayName || null,
      photoUrl: googleUser.photoURL || null,
      settings: {
        create: {
          currency: "USD",
          dark_mode: true,
        },
      },
    },
    include: { settings: true },
  });

  return newUser;
}
