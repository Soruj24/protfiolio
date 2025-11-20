import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import connectDB from "@/lib/mongodb-connect";
import Project from "@/models/Project";
import User from "@/models/User";

export async function GET() {
  try {
    const session = await auth();
    if (
      !session ||
      !session.user ||
      (session.user as { role?: string }).role !== "admin"
    ) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();

    const [totalProjects, featuredProjects, totalUsers] = await Promise.all([
      Project.countDocuments(),
      Project.countDocuments({ featured: true }),
      User.countDocuments(),
    ]);

    return NextResponse.json({
      totalProjects,
      featuredProjects,
      totalUsers,
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch statistics" },
      { status: 500 }
    );
  }
}
