import { NextRequest, NextResponse } from "next/server";
import { Project } from "@/models/Project";
import connectDB from "@/lib/mongodb-connect";

export async function GET() {
  try {
    await connectDB();

    const projects = await Project.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      data: projects,
      count: projects.length
    });
  } catch (error) {
    console.error("GET Projects Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.slug || !body.description) {
      return NextResponse.json(
        { success: false, error: "Title, slug, and description are required" },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existingProject = await Project.findOne({ slug: body.slug });
    if (existingProject) {
      return NextResponse.json(
        { success: false, error: "Project with this slug already exists" },
        { status: 400 }
      );
    }

    // Create project with proper field mapping
    const newProject = new Project({
      // Required fields
      title: body.title,
      slug: body.slug,
      description: body.description,
      fullDescription: body.fullDescription || "",
      image: body.image || "",
      category: body.category || "fullstack",
      status: body.status || "completed",
      difficulty: body.difficulty || "intermediate",
      duration: body.duration || "",
      teamSize: body.teamSize || "",
      completionDate: body.completionDate || new Date().toISOString().split('T')[0],
      emoji: body.emoji || "🚀",

      // Arrays with defaults
      technologies: body.technologies || [],
      features: body.features || [],
      screenshots: body.screenshots || [],
      challenges: body.challenges || [],
      solutions: body.solutions || [],
      tags: body.tags || [],
      lessonsLearned: body.lessonsLearned || [],
      futureImprovements: body.futureImprovements || [],

      // URLs
      githubUrl: body.githubUrl || "",
      liveUrl: body.liveUrl || "",

      // Boolean
      featured: body.featured || false,

      // Optional fields
      architecture: body.architecture || "",
      metaDescription: body.metaDescription || "",
      seoTitle: body.seoTitle || "",

      // Complex objects
      stats: body.stats || {
        completionTime: body.duration || "",
        teamSize: body.teamSize || "",
        complexity: body.difficulty || "intermediate",
        views: 0,
        likes: 0
      },

      developmentHighlights: body.developmentHighlights || [],

      performance: body.performance || {
        loadTime: 0,
        accessibility: 0,
        bestPractices: 0,
        seo: 0
      },

      // Timestamps
      createdAt: body.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });

    // Save to database
    const savedProject = await newProject.save();

    return NextResponse.json({
      success: true,
      data: savedProject,
      message: "Project created successfully"
    }, { status: 201 });
  } catch (error: any) {
    console.error("POST Project Error:", error);

    // Handle MongoDB validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json(
        { success: false, error: "Validation failed", details: errors },
        { status: 400 }
      );
    }

    // Handle duplicate key errors
    if (error.code === 11000) {
      return NextResponse.json(
        { success: false, error: "Project with this slug already exists" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Failed to create project" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Project ID is required" },
        { status: 400 }
      );
    }

    // Add updated timestamp
    updateData.updatedAt = new Date().toISOString();

    // Handle array fields properly
    if (updateData.technologies && typeof updateData.technologies === 'string') {
      updateData.technologies = updateData.technologies.split(',').map((t: string) => t.trim()).filter((t: string) => t !== '');
    }
    if (updateData.features && typeof updateData.features === 'string') {
      updateData.features = updateData.features.split(',').map((f: string) => f.trim()).filter((f: string) => f !== '');
    }
    if (updateData.tags && typeof updateData.tags === 'string') {
      updateData.tags = updateData.tags.split(',').map((t: string) => t.trim()).filter((t: string) => t !== '');
    }

    const updatedProject = await Project.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedProject) {
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: updatedProject,
      message: "Project updated successfully"
    });
  } catch (error: any) {
    console.error("PUT Project Error:", error);

    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json(
        { success: false, error: "Validation failed", details: errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Failed to update project" },
      { status: 500 }
    );
  }
}