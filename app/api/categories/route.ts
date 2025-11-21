import { NextResponse } from "next/server"; 
import BlogPost from "@/models/BlogPost";
import connectDB from "@/lib/mongodb-connect";

export async function GET() {
  try {
    await connectDB();

    const categories = await BlogPost.aggregate([
      { $match: { status: "published" } },
      {
        $group: {
          _id: "$category",
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } },
    ]);

    const formattedCategories = categories.map((cat) => ({
      id: cat._id.toLowerCase().replace(/[^a-z0-9]/g, "-"),
      name: cat._id,
      count: cat.count,
    }));

    return NextResponse.json({
      success: true,
      data: formattedCategories,
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
