import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

function createPrisma() {

  return client;

}

export default createPrisma;