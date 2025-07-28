import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // create (Insert Data)
  // Single User
//   const user = await prisma.user.create({
//     data: {
//       name: "prajwal",
//       email: "prajwal@gmail.com",
//     },
//   });
//   console.log("User Created: ", user);

  //for multiple Users
  const newUser = await prisma.user.createMany({
    data: [
      { name: "prajwal", email: "prajwal@gmail.com" },
      { name: "Sai", email: "sai@gmail.com" },
    ],
  });
  console.log("User Created: ", newUser);
};

makeStrictEnum()
  .catch((e) => console.log(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
