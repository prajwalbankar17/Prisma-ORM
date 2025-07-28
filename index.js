import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // create (Insert Data)
    // Single User
    const user = await prisma.user.create({
        data: {
            name: "prajwal",
            email: "prajwal@gmail.com",
        }
    })
    console.log("User Created: ", user);
}
makeStrictEnum()
  .catch((e) => console.log(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
