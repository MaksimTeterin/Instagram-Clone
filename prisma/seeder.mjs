import { PrismaClient, Prisma } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { use } from "react";

const prisma = new PrismaClient();

async function main() {
  const users = prisma.user.findMany(); // Fist get all users
  if ((await users).length == 0) {
    // If no users, create 1000 users
    for (let i = 0; i < 50; i++) {
      // Create 1000 users
      const user = await prisma.user.create({
        data: {
          id: i + 1,
          username: faker.internet.username(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          name: faker.person.fullName(),
          bio: faker.lorem.sentence(),
          avatarUrl: faker.image.avatar(),
          createdAt: faker.date.recent(),
          updatedAt: faker.date.recent(),
        },
      });
      for (let postscount = 0; postscount < 20; postscount++) {
        // Create 100 posts for each user
        const post = await prisma.post.create({
          data: {
            caption: faker.lorem.sentence(),
            imageUrl: faker.image.avatar(),
            authorId: user.id,
            updatedAt: faker.date.recent(),
          },
        });

        for (let i = 0; i < 3; i++) {
          // Create 3 comments for each post
          await prisma.comment.create({
            data: {
              content: faker.lorem.sentence(),
              postId: post.id,
              authorId: user.id,
            },
          });
        }
        for (let i = 0; i < 5; i++) {
          await prisma.like.create({
            data: {
              postId: post.id,
              userId: user.id,
            },
          });
        }
      }
      const users = await prisma.user.findMany(); // Сначала получаем всех пользователей
      for (const user of users) {
        const followersCount = Math.floor(Math.random() * 5) + 1;
        // Случайные подписчики
        for (let i = 0; i < followersCount; i++) {
          const randomFollower =
            users[Math.floor(Math.random() * users.length)];
          if (randomFollower.id !== user.id) {
            // Избегаем самоподписки
            const existingFollower = await prisma.follower.findUnique({
              where: {
                followerId_followingId: {
                  followerId: randomFollower.id,
                  followingId: user.id,
                },
              },
            });

            if (!existingFollower) {
              await prisma.follower.create({
                data: {
                  followerId: randomFollower.id,
                  followingId: user.id,
                },
              });
            }
          }
        }
      }
    }
    console.log("Database seeded");
  } else {
    console.log(prisma.user.count.length);
    console.log("Database already seeded");
  }
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
