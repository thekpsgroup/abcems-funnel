import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({ where: { email: "admin@abcemssolutions.com" }, update: {}, create: { email: "admin@abcemssolutions.com", name: "Admin User", role: "ADMIN" } });
  const instructor = await prisma.user.upsert({ where: { email: "instructor@abcemssolutions.com" }, update: {}, create: { email: "instructor@abcemssolutions.com", name: "Lead Instructor", role: "INSTRUCTOR" } });
  await Promise.all([1,2,3,4,5].map(i => prisma.user.upsert({ where: { email: `learner${i}@example.com` }, update: {}, create: { email: `learner${i}@example.com`, name: `Learner ${i}`, role: "LEARNER" } })));

  // Create courses (using create instead of upsert since title is not unique)
  const emt = await prisma.course.create({ data: { title: "EMT Prep Course", description: "3-week EMT-Basic program, live Zoom or in-person. Includes study guide & homework packet. Free retakes until you pass.", priceCents: 20000 } });
  const paramedic = await prisma.course.create({ data: { title: "Paramedic Prep Course", description: "Scenario-based paramedic prep with test strategy coaching. Includes homework & unlimited retakes until you pass.", priceCents: 40000 } });

  await prisma.session.create({ data: { courseId: emt.id, startsAt: new Date(Date.now() + 7*24*60*60*1000), endsAt: new Date(Date.now() + 7*24*60*60*1000 + 3*60*60*1000), location: "DFW Training Center Room 101", instructorId: instructor.id } });
  await prisma.session.create({ data: { courseId: paramedic.id, startsAt: new Date(Date.now() + 14*24*60*60*1000), endsAt: new Date(Date.now() + 14*24*60*60*1000 + 4*60*60*1000), location: "DFW Training Center Room 202", instructorId: instructor.id } });

  console.log("✅ Seed complete");
}

main().catch(e => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());