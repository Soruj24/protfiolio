import { NextRequest, NextResponse } from "next/server";
import { Project } from "@/models/Project";
import connectDB from "@/lib/mongodb-connect";

interface RouteContext {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(
  request: NextRequest,
  { params }: RouteContext
) {
  try {
    await connectDB();

    // Await the params Promise first, then destructure
    const { slug } = await params;

    console.log("🔍 Looking for project with slug:", slug);

    if (!slug) {
      console.log("❌ Slug is undefined");
      return NextResponse.json(
        { success: false, error: "Slug parameter is required" },
        { status: 400 }
      );
    }

    const project = await Project.findOne({ slug });

    if (!project) {
      console.log("❌ No project found with slug:", slug);
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 }
      );
    }

    console.log("✅ Project found:", project.title);
    return NextResponse.json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch project" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: RouteContext
) {
  try {
    await connectDB();
    const { slug } = await params;

    const body = await request.json();

    console.log("📝 Updating project with slug:", slug);

    const updatedProject = await Project.findOneAndUpdate(
      { slug },
      {
        ...body,
        updatedAt: new Date(),
      },
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
      data: updatedProject
    });
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update project" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: RouteContext
) {
  try {
    await connectDB();
    const { slug } = await params;

    console.log("🗑️ Deleting project with slug:", slug);

    const deletedProject = await Project.findOneAndDelete({ slug });

    if (!deletedProject) {
      return NextResponse.json(
        { success: false, error: "Project not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Project deleted successfully"
    });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete project" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: RouteContext
) {
  try {
    await connectDB();
    const { slug } = await params;

    const body = await request.json();

    console.log("🔧 Patching project with slug:", slug);

    const updatedProject = await Project.findOneAndUpdate(
      { slug },
      {
        ...body,
        updatedAt: new Date(),
      },
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
      data: updatedProject
    });
  } catch (error) {
    console.error("PATCH Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update project" },
      { status: 500 }
    );
  }
}