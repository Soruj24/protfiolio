import { NextRequest, NextResponse } from "next/server";
import { seedProjects, validateSeedProjects } from "@/lib/seed-data";
import connectDB from "@/lib/mongodb-connect";
import { Project } from "@/models/Project";

export async function POST(request: NextRequest) {
    try {
        await connectDB();

        console.log('Starting database seed...');

        // Validate seed data first
        try {
            validateSeedProjects();
        } catch (validationError: any) {
            return NextResponse.json({
                success: false,
                error: `Seed data validation failed: ${validationError.message}`
            }, { status: 400 });
        }

        // Clear existing projects
        const deleteResult = await Project.deleteMany({});
        console.log(`Cleared ${deleteResult.deletedCount} existing projects`);

        // Insert seed projects
        const insertedProjects = [];
        const errors = [];

        for (const project of seedProjects) {
            try {
                // Ensure all required fields are present
                const projectData = {
                    ...project,
                    technologies: project.technologies || [],
                    features: project.features || [],
                    screenshots: project.screenshots || [],
                    challenges: project.challenges || [],
                    solutions: project.solutions || [],
                    tags: project.tags || [],
                    developmentHighlights: project.developmentHighlights || [],
                    lessonsLearned: project.lessonsLearned || [],
                    futureImprovements: project.futureImprovements || [],
                    stats: project.stats || {
                        completionTime: "",
                        teamSize: "",
                        complexity: "",
                        views: 0,
                        likes: 0
                    },
                    performance: project.performance || {
                        loadTime: 0,
                        accessibility: 0,
                        bestPractices: 0,
                        seo: 0
                    },
                    architecture: project.architecture || "",
                    metaDescription: project.metaDescription || "",
                    seoTitle: project.seoTitle || "",
                    githubUrl: project.githubUrl || "",
                    liveUrl: project.liveUrl || ""
                };

                const newProject = new Project(projectData);
                const savedProject = await newProject.save();
                insertedProjects.push(savedProject);
                console.log(`✓ Inserted project: ${project.title}`);
            } catch (error: any) {
                console.error(`✗ Failed to insert project ${project.title}:`, error.message);
                errors.push({
                    project: project.title,
                    error: error.message
                });
            }
        }

        if (errors.length > 0) {
            console.error(`Failed to insert ${errors.length} projects`);
            return NextResponse.json({
                success: false,
                message: `Partially seeded database. ${insertedProjects.length} projects inserted, ${errors.length} failed.`,
                inserted: insertedProjects.length,
                failed: errors.length,
                errors: errors
            }, { status: 207 });
        }

        console.log(`Successfully seeded ${insertedProjects.length} projects`);

        return NextResponse.json({
            success: true,
            message: 'Database seeded successfully',
            count: insertedProjects.length,
            data: insertedProjects.map(p => ({
                id: p.id,
                title: p.title,
                category: p.category,
                status: p.status
            }))
        });

    } catch (error: any) {
        console.error('Error seeding database:', error);

        return NextResponse.json(
            {
                success: false,
                error: error.message || 'Failed to seed database'
            },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await connectDB();

        const projectCount = await Project.countDocuments();
        const sampleProjects = await Project.find().limit(3).select('title category status');

        return NextResponse.json({
            success: true,
            data: {
                totalProjects: projectCount,
                sampleProjects,
                hasSeedData: projectCount > 0
            }
        });

    } catch (error: any) {
        console.error('Error checking seed status:', error);

        return NextResponse.json(
            {
                success: false,
                error: 'Failed to check seed status'
            },
            { status: 500 }
        );
    }
}