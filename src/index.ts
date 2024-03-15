import { PrismaClient } from "@prisma/client";
 const prisma = new PrismaClient();

async function insertUser(username:string, firstName:string, password: string, lastName: string) {
    const res =  await prisma.user.create({
        data: {
            email: username,
            password,
            firstName,
            lastName
        },
        select:{
            id:true,
            password:true,
            firstName:true
        }
    })
    console.log(res);
}
// insertUser("thrvjoshi@gmail.com", "Atharava","asss","Joshi");
interface UpdateParams{
    firstName: string,
    lastName: string
}

async function updateUser(username: string, {
    firstName,
    lastName 
}:UpdateParams) {
    await prisma.user.update({
        where: {email: username},
        data:{
            firstName,
            lastName
        }
    })
    
}
// // const res1 =   updateUser('thrvjoshi@gmail', {
//     firstName: "Atharvaaa",
//     lastName: "Joshi"
// }).then(()=> {
//     console.log("Updated")
// }).finally(async()=>{
//     await prisma.$disconnect()
// });


// console.log(res1);

async function getUser(username: string) {
    const user = await prisma.user.findFirst({
        where:{
            email: username
        }
    })
    console.log(user);

    
}


const user = getUser("yadneyajoshgi3@gmail.com");
console.log(getUser);