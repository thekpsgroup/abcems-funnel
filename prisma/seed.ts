import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Create admin user with password
  const adminPassword = await bcrypt.hash("admin123", 12);
  await prisma.user.upsert({ 
    where: { email: "admin@abcemssolutions.com" }, 
    update: {}, 
    create: { 
      email: "admin@abcemssolutions.com", 
      name: "Admin User", 
      role: "ADMIN",
      password: adminPassword
    } 
  });

  // Create instructor with password
  const instructorPassword = await bcrypt.hash("instructor123", 12);
  const instructor = await prisma.user.upsert({ 
    where: { email: "instructor@abcemssolutions.com" }, 
    update: {}, 
    create: { 
      email: "instructor@abcemssolutions.com", 
      name: "Lead Instructor", 
      role: "INSTRUCTOR",
      password: instructorPassword
    } 
  });

  // Create sample learners with passwords
  await Promise.all([1,2,3,4,5].map(async (i) => {
    const password = await bcrypt.hash(`learner${i}123`, 12);
    return prisma.user.upsert({ 
      where: { email: `learner${i}@example.com` }, 
      update: {}, 
      create: { 
        email: `learner${i}@example.com`, 
        name: `Learner ${i}`, 
        role: "LEARNER",
        password: password
      } 
    });
  }));

  // Create courses (using create instead of upsert since title is not unique)
  const emt = await prisma.course.create({ data: { title: "EMT Prep Course", description: "1-day EMT-Basic program, live Zoom or in-person. Includes study guide & homework packet. Unlimited retakes until you pass (within 1 year)*", priceCents: 20000 } });
  const paramedic = await prisma.course.create({ data: { title: "Paramedic Prep Course", description: "Scenario-based paramedic prep with test strategy coaching. Includes homework & unlimited retakes until you pass (within 1 year)*", priceCents: 40000 } });

  await prisma.session.create({ data: { courseId: emt.id, startsAt: new Date(Date.now() + 7*24*60*60*1000), endsAt: new Date(Date.now() + 7*24*60*60*1000 + 8*60*60*1000), location: "DFW Training Center Room 101", instructorId: instructor.id } });
  await prisma.session.create({ data: { courseId: paramedic.id, startsAt: new Date(Date.now() + 14*24*60*60*1000), endsAt: new Date(Date.now() + 14*24*60*60*1000 + 8*60*60*1000), location: "DFW Training Center Room 202", instructorId: instructor.id } });

  // Create sample modules and lessons for EMT course
  const emtModule1 = await prisma.module.create({
    data: {
      courseId: emt.id,
      title: "Basic Life Support & CPR",
      description: "Fundamental life-saving skills and techniques",
      estimatedTime: 45,
      order: 1
    }
  });

  const emtModule2 = await prisma.module.create({
    data: {
      courseId: emt.id,
      title: "Patient Assessment",
      description: "Systematic patient evaluation and vital signs",
      estimatedTime: 60,
      order: 2
    }
  });

  const emtModule3 = await prisma.module.create({
    data: {
      courseId: emt.id,
      title: "Cardiac Emergencies",
      description: "Recognition and treatment of cardiac conditions",
      estimatedTime: 75,
      order: 3
    }
  });

  // Create lessons for EMT modules
  await prisma.lesson.create({
    data: {
      moduleId: emtModule1.id,
      title: "CPR Fundamentals",
      content: "Learn the basic principles of cardiopulmonary resuscitation including chest compressions, rescue breathing, and AED usage.",
      estimatedTime: 20,
      order: 1
    }
  });

  await prisma.lesson.create({
    data: {
      moduleId: emtModule1.id,
      title: "Airway Management",
      content: "Techniques for maintaining patient airway patency and oxygenation.",
      estimatedTime: 25,
      order: 2
    }
  });

  await prisma.lesson.create({
    data: {
      moduleId: emtModule2.id,
      title: "Primary Assessment",
      content: "Initial patient evaluation including ABCs and rapid trauma assessment.",
      estimatedTime: 30,
      order: 1
    }
  });

  await prisma.lesson.create({
    data: {
      moduleId: emtModule2.id,
      title: "Vital Signs & Monitoring",
      content: "Measurement and interpretation of vital signs and patient monitoring.",
      estimatedTime: 30,
      order: 2
    }
  });

  await prisma.lesson.create({
    data: {
      moduleId: emtModule3.id,
      title: "Acute Coronary Syndrome",
      content: "Recognition and management of heart attack and cardiac emergencies.",
      estimatedTime: 40,
      order: 1
    }
  });

  await prisma.lesson.create({
    data: {
      moduleId: emtModule3.id,
      title: "Cardiac Arrest Management",
      content: "Advanced cardiac life support protocols and defibrillation.",
      estimatedTime: 35,
      order: 2
    }
  });

  // Create sample modules for Paramedic course
  const paramedicModule1 = await prisma.module.create({
    data: {
      courseId: paramedic.id,
      title: "Advanced Airway Management",
      description: "Advanced airway techniques and pharmacology",
      estimatedTime: 90,
      order: 1
    }
  });

  const paramedicModule2 = await prisma.module.create({
    data: {
      courseId: paramedic.id,
      title: "Critical Care Pharmacology",
      description: "Emergency medication administration and calculations",
      estimatedTime: 120,
      order: 2
    }
  });

  // Create lessons for Paramedic modules
  await prisma.lesson.create({
    data: {
      moduleId: paramedicModule1.id,
      title: "Endotracheal Intubation",
      content: "Advanced airway management techniques for paramedics.",
      estimatedTime: 45,
      order: 1
    }
  });

  await prisma.lesson.create({
    data: {
      moduleId: paramedicModule1.id,
      title: "Rapid Sequence Intubation",
      content: "Pharmacological approaches to airway management.",
      estimatedTime: 45,
      order: 2
    }
  });

  await prisma.lesson.create({
    data: {
      moduleId: paramedicModule2.id,
      title: "Emergency Medications",
      content: "Common emergency medications, indications, and dosages.",
      estimatedTime: 60,
      order: 1
    }
  });

  await prisma.lesson.create({
    data: {
      moduleId: paramedicModule2.id,
      title: "Drug Calculations",
      content: "Critical medication dosage calculations and administration.",
      estimatedTime: 60,
      order: 2
    }
  });

  console.log("✅ Seed complete");
}

main().catch(e => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());