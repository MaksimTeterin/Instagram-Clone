import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.follower.deleteMany();
  var users = await prisma.user.findMany(); // Fist get all users
  for (const user of users) {
    await prisma.comment.deleteMany({
      where: {
        authorId: user.id,
      },
    });
    await prisma.like.deleteMany({
      where: {
        userId: user.id,
      },
    });
    await prisma.post.deleteMany({
      where: {
        authorId: user.id,
      },
    });
  }
  await prisma.user.deleteMany();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log("Data removed");
  });
