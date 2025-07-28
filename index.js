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
  //   const newUser = await prisma.user.createMany({
  //     data: [
  //       { name: "prajwal", email: "prajwal@gmail.com" },
  //       { name: "Sai", email: "sai@gmail.com" },
  //     ],
  //   });
  //   console.log("User Created: ", newUser);

  // const newUser = await prisma.user.createMany({
  //     data: [
  //       { name: "prajwal", email: "prajwal@gmail.com" },
  //       { name: "Sai", email: "sai@gmail.com" },
  //     ],
  //   });
  //   console.log("User Created: ", newUser);

  //Read (Fetch Data)
  //Get all users
  const users = await prisma.user.findMany();
  console.log("All Users: ", users);

  //Get a single users by ID
//   const user = await prisma.user.findUnique({
//     where: {
//       id: 1,
//     },
//   });
//   console.log("User: ", user);

    //Get users with filtering
//   const user = await prisma.user.findMany({
//     where: {
//       name: prajwal,
//     },
//   });
//   console.log("User: ", user);

//update (modify data)
//update one user

// const updateUser = await prisma.user.update({
//     where : {id:1},
//     data: {name:"Rocky"}
// })
// console.log(updateUser)

//update multiple users
// const updateUser = await prisma.user.updateMany({
//     where : {name:"prajwal"},
//     data: {email:"prajwal_updated@gmail.com"}
// })
// console.log(updateUser)

//Delete (Remove Data)
//Delete One User
// const deletedUser = await prisma.user.delete({
//     where: { id: 1 },
// });

//Delete Many User
const deletedUsers = await prisma.user.deleteMany({
    where: [{ id: 1 }, { id: 2 }, { id: 3 }],
});
console.log("Deleted Users: ", deletedUsers);

}


makeStrictEnum()
  .catch((e) => console.log(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
