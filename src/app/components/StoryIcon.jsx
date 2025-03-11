import { PrismaClient, Prisma } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { use } from "react";
import Slider from "./Slider";
const prisma = new PrismaClient();

const StoryIcon = async () => {
  const usercount = await prisma.user.count();
  const numberofsliderelements = Math.floor(usercount / 8);
  const users = await prisma.user.findMany({
    select: {
      username: true,
      avatarUrl: true,
    },
  });
  console.log(users);
  const elements = [];
  elements.push(
    <div className="flex w-[630px]" key={faker.number.int(1, 1000)}>
      {users.map((user, index) => (
        <div className={`flex flex-col items-center ${index !== 0 && index !== users.length ? 'mx-3' : 'mr-3'}`}
          key={user.username}>
          <img
            src={user.avatarUrl}
            alt=""
            className="w-[56px] rounded-full border-2 block mb-1"
          />
          <p className="text-xs text-center">{user.username.slice(0, 5)}</p>
        </div>
      ))}
    </div>
  );
  return (
    <div className="flex">
      <Slider content={elements}></Slider>
    </div>
  );
};

export default StoryIcon;
