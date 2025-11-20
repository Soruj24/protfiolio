import connectDB from "@/lib/mongodb-connect";
import { seedProjects } from "@/lib/seed-data"; 
import { Project } from "@/models/Project";

async function seedDatabase() {
  try {
    await connectDB();
    
    // Clear existing projects
    await Project.deleteMany({});
    console.log('Cleared existing projects');
    
    // Insert seed projects
    const projects = await Project.insertMany(seedProjects);
    console.log(`Successfully seeded ${projects.length} projects`);
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();