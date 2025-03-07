import { PrismaClient } from '@prisma/client';
import Post from './Post';
const Foryoupage  = async () => {
  const prisma = new PrismaClient();
    const posts = await prisma.post.findMany(
        {
            orderBy: [
                {
                  createdAt: 'desc',
                }],
            include: {
            author: {
                select: {
                username: true,
                avatarUrl: true,
                },
            },
            },
        }
    );
    return (
        <div> 
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      );
  
}
export default Foryoupage;