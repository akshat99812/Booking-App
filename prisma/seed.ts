
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    const types = [
      { name: "Startup" },
      { name: "Career" },
    ];

    const consultationTypes = await Promise.all(
      types.map(type => prisma.consultationType.create({ data: type }))
    );

    const sessions = [];
    const hours = Array.from({ length: 6 }, (_, i) => i + 5); 
    const durations = [60, 30]; 

    for (const type of consultationTypes) {
      for (const hour of hours) {
        sessions.push({
          date: new Date(),
          typeId: type.id,
          slot: `${hour}:00 - ${hour + 1}:00`,
          duration: 60,
          available: true
        });
      }

      for (const minute of [0, 30]) {
        const hour = 5; // 5 PM
        sessions.push({
          date: new Date(),
          typeId: type.id,
          slot: `${hour}:${minute} - ${hour}:${minute + 30}`,
          duration: 30,
          available: true
        });
      }
    }

    await Promise.all(
      sessions.map(session => prisma.session.create({ data: session }))
    );

    console.log("Seed data successfully executed.");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
